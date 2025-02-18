package ajax.controller.api;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ajax.domain.Item;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin(origins = "http://localhost:9090")
@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;
	private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";


	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}

	@GetMapping
	public List<Item> test(){
		return items;
	}

	@PostMapping(value = "/file", consumes = "multipart/form-data")
	public ResponseEntity<Item> addItem(
			@RequestParam("type") String type,
			@RequestParam("name") String name,
			@RequestParam(value = "file", required = false) MultipartFile file) {

		System.out.println("test=-------" + type + ", " + name);

		// 새로운 아이템 생성
		Item newItem = new Item(type, name);
		newItem.setId((long) (items.size() + 1));

		File directory = new File(UPLOAD_DIR);
		if (!directory.exists()) {
			directory.mkdirs();
		}

		try {
			if (file != null && !file.isEmpty()) { // ✅ 파일이 존재하는 경우만 저장
				String originalName = file.getOriginalFilename();
				String filePath = UPLOAD_DIR + originalName;

				Path path = Paths.get(filePath);
				Files.write(path, file.getBytes());

				newItem.setImage("/uploads/" + originalName);
			} else {
				newItem.setImage(null); // ✅ 파일이 없으면 null 저장
			}

			items.add(newItem);
			return ResponseEntity.ok(newItem);

		} catch (IOException e) {
			return ResponseEntity.internalServerError().build();
		}
	}


//	@PostMapping(value = "/file", consumes = "multipart/form-data")
//	public ResponseEntity<Item> addItem(
//			@RequestParam("type") String type,
//			@RequestParam("name") String name,
//			@RequestParam(value = "file", required = false) MultipartFile file) {
//
//		System.out.println("test=-------" + type + name);
//
//		// 새로운 아이템 생성
//		Item newItem = new Item(type, name);
//		newItem.setId((long) (items.size() + 1));
//
//		// 업로드 디렉토리 확인 및 생성
//		File directory = new File(UPLOAD_DIR);
//		if (!directory.exists()) {
//			directory.mkdirs();
//		}
//
//		try {
//			if (file != null && !file.isEmpty()) {
//				String originalName = file.getOriginalFilename();
//				String filePath = UPLOAD_DIR + originalName;
//
//				Path path = Paths.get(filePath);
//				Files.write(path, file.getBytes());
//
//				newItem.setImage("/uploads/" + originalName); // ✅ 클라이언트에서 접근할 수 있는 경로로 저장
//			}
//
//			items.add(newItem);
//			return ResponseEntity.ok(newItem); // ✅ `Item` 객체 그대로 반환
//
//		} catch (IOException e) {
//			return ResponseEntity.internalServerError().build();
//		}
//	}
//
//
//
//	@PostMapping
//	public ResponseEntity<Item> addItemWithoutFile(@RequestBody Item newItem) {
//		newItem.setId((long) (items.size() + 1));
//		items.add(newItem);
//
//		return ResponseEntity.ok(newItem);
//	}
	@GetMapping("/{itemId}")
	public ResponseEntity<Item> getOneItem(@PathVariable Long itemId) {
		return items.stream()
				.filter(item -> item.getId().equals(itemId))
				.findFirst()
				.map(ResponseEntity::ok) // ✅ 아이템이 있으면 200 OK 응답
				.orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build()); // ✅ 없으면 404 응답
	}


	@DeleteMapping("/{itemId}")
	public ResponseEntity<Map<String, String>> deleteItem(@PathVariable Long itemId) {
		Map<String, String> response = new HashMap<>();

		Optional<Item> itemToDelete = items.stream()
				.filter(item -> item.getId().equals(itemId))
				.findFirst();

		if (itemToDelete.isPresent()) {
			items.remove(itemToDelete.get()); // ✅ 안전한 삭제
			response.put("message", "Item " + itemId + " is deleted");
			return ResponseEntity.ok(response);
		} else {
			response.put("error", "Item with ID " + itemId + " not found");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}
	}


	@PutMapping("/{itemId}")
	public ResponseEntity<Item> updateItem(@PathVariable Long itemId, @RequestBody Item updatedItem) {
		Optional<Item> existingItem = items.stream()
				.filter(item -> item.getId().equals(itemId))
				.findFirst();

		if (existingItem.isPresent()) {
			Item item = existingItem.get();
			item.setType(updatedItem.getType());
			item.setName(updatedItem.getName());

			return ResponseEntity.ok(item);
		} else {
			return ResponseEntity.notFound().build();
		}
	}


}
