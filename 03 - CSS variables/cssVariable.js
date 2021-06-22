const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // 取得 px，若沒有則為空字串
    const suffix = this.dataset.sizing || '';
    console.log(this);
    console.log(this.dataset);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(function(input) {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
})