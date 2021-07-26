(function () {
  const triggers = document.querySelectorAll('[data-terminal]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const dialogElement = document.getElementById(
        trigger.getAttribute('data-terminal')
      );

      dialogElement.showModal();

      dialogElement.querySelector('button').addEventListener(
        'click',
        () => {
          dialogElement.close();
        },
        {once: true}
      );
    });
  });
})();
