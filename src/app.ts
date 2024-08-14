import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(root, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
