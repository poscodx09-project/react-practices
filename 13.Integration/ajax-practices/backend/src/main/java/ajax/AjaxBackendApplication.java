package ajax;

import ajax.domain.Item;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.LinkedList;
import java.util.List;

@SpringBootApplication
public class AjaxBackendApplication {

	@Bean("items")
	public List<Item> itemList() {
		return new LinkedList<>(List.of(
			new Item(4L, "위드봄", "spring in action"),
			new Item(3L, "콩지니빵", "hood shirt"),
			new Item(2L, "작은빵집", "history of western civilization"),
			new Item(1L, "쑤니맘", "apple pie")
		));
	}

	public static void main(String[] args) {
		SpringApplication.run(AjaxBackendApplication.class, args);
	}
}