const addAndRemoveClasses = (target: HTMLButtonElement, classes: string[]) => {
  target.focus();
  target.classList.add(...classes);
  setTimeout((el, classes) => {
    el.classList.remove(...classes);
  }, 150, target, classes);
}

export {
  addAndRemoveClasses
}
