import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
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

    const video = new VideoComponent(
      "Video Title",
      "https://www.youtube.com/watch?v=K3-jG52XwuQ"
    );
    video.attachTo(root, "beforeend");

    const note = new NoteComponent("Note Title", "Note Body");
    note.attachTo(root, "beforeend");

    const todo = new TodoComponent("Todo Title", "Todo Item");
    todo.attachTo(root, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
