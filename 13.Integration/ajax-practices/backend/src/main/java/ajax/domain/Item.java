package ajax.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = {"type", "name", "image"})
public class Item {
	@NonNull
	private Long id;

	@NonNull
	private String type;

	@NonNull
	private String name;

	private String image;

	public Item(String type, String name) {
		this.type = type;
		this.name = name;
	}
}