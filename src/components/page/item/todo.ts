import { BaseComponent } from "../../components.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
      <h2 class="todo__title"></h2>
      <input type="checkbox" id="todo_checkbox" class="todo-checkbox" />
      <label for="todo_checkbox" class="todo-label"></label>
    </section>`);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const totoElement = this.element.querySelector(
      ".todo-label"
    )! as HTMLLabelElement;
    totoElement.textContent = todo;
  }
}
