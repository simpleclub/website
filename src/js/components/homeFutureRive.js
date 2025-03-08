// Import Rive
import { Rive } from '@rive-app/canvas';
// import { Rive, Layout, Fit } from '@rive-app/canvas';

let riveInstance3;

// Function to initialize Rive
function initializeRive3() {
  
    riveInstance3 = new Rive({
        src: "https://cdn.prod.website-files.com/677bca9b2b80576f184f4dd7/67cc49ef8dcac0c6207cad04_l7p18oVoI0W6briwxEsTlQ.riv",
        canvas: document.querySelector('[data-canvas="canvas-rive-3"]'),
        autoplay: true,
        artboard: "Artboard",
        stateMachines: ["State Machine 1"],
        // layout: new Layout({
        //   fit: Fit.ScaleDown,
        //   // layoutScaleFactor: 2, // 2x scale of the layout, when using `Fit.Layout`. This allows you to resize the layout as needed.
        // }),
        // onLoad: () => {
        //   // this makes rive canvas responsive
        //   riveInstance.resizeDrawingSurfaceToCanvas();
        // },
    });

    // Add event listeners AFTER Rive has loaded
    document.querySelector('[data-button="rive-3-btn-1"]').addEventListener("click", () => setAnimation3(0));
    document.querySelector('[data-button="rive-3-btn-2"]').addEventListener("click", () => setAnimation3(1));
    document.querySelector('[data-button="rive-3-btn-3"]').addEventListener("click", () => setAnimation3(2));
    document.querySelector('[data-button="rive-3-btn-4"]').addEventListener("click", () => setAnimation3(3));
}

initializeRive3();

// Function to trigger animations
function setAnimation3(value) {
    if (riveInstance3) {
        const input = riveInstance3.stateMachineInputs("State Machine 1").find(i => i.name === "Number 1");
        if (input) {
            input.value = value;
        }
    }
}

///////

let riveInstance2;

// Function to initialize Rive
function initializeRive2() {
  
    riveInstance2 = new Rive({
        src: "https://cdn.prod.website-files.com/677bca9b2b80576f184f4dd7/67cc8ea0bbe0a746a7964ef6_sCV2E0K6M0qLdRe4zoyUVg.riv",
        canvas: document.querySelector('[data-canvas="canvas-rive-2"]'),
        autoplay: true,
        artboard: "Artboard",
        stateMachines: ["State Machine 1"],
    });

    // Add event listeners AFTER Rive has loaded
    document.querySelector('[data-button="rive-2-btn-1"]').addEventListener("click", () => setAnimation2(0));
    document.querySelector('[data-button="rive-2-btn-2"]').addEventListener("click", () => setAnimation2(1));
    document.querySelector('[data-button="rive-2-btn-3"]').addEventListener("click", () => setAnimation2(2));
}

initializeRive2();



// Function to trigger animations
function setAnimation2(value) {
    console.log(riveInstance2.stateMachineInputs("State Machine 1"));
    // watch for empty spaces in trigger names, some need to have empty space before and after
    if (value == "0"){
        const input = riveInstance2.stateMachineInputs("State Machine 1").find(i => i.name === " < ");
        input.fire();
    } else if (value == '1') {
        const input = riveInstance2.stateMachineInputs("State Machine 1").find(i => i.name === " > ");
        input.fire();
    } else {
        const input = riveInstance2.stateMachineInputs("State Machine 1").find(i => i.name === "Zurücksetzen");
        input.fire();
    }
}



///////////

let riveInstance1;

// Function to initialize Rive
function initializeRive1() {
  
    riveInstance1 = new Rive({
        src: "https://cdn.prod.website-files.com/677bca9b2b80576f184f4dd7/67cc944997351333ebc93621_bESiP5LlAkWeyvIDd1Sflg.riv",
        canvas: document.querySelector('[data-canvas="canvas-rive-1"]'),
        autoplay: true,
        artboard: "Artboard",
        stateMachines: ["State Machine 1"],
    });

    // Add event listeners AFTER Rive has loaded
    document.querySelector('[data-button="rive-1-btn-1"]').addEventListener("click", () => setAnimation1(0));
    document.querySelector('[data-button="rive-1-btn-2"]').addEventListener("click", () => setAnimation1(1));
}

initializeRive1();

// Function to trigger animations
function setAnimation1(value) {
    // console.log(riveInstance1.stateMachineInputs("State Machine 1"));
    if (value == "0"){
        const input = riveInstance1.stateMachineInputs("State Machine 1").find(i => i.name === " < ");
        input.fire();
    } else {
        const input = riveInstance1.stateMachineInputs("State Machine 1").find(i => i.name === " > ");
        input.fire();
    }
}

//////////////////

let riveInstance4;

// Function to initialize Rive
function initializeRive4() {
  
    riveInstance4 = new Rive({
        src: "https://cdn.prod.website-files.com/677bca9b2b80576f184f4dd7/67cc9d1b02757fe8bd75e33c_M-mr-tu99kGB6xWTZRoDjw.riv",
        canvas: document.querySelector('[data-canvas="canvas-rive-4"]'),
        autoplay: true,
        artboard: "Ebene_1",
        stateMachines: ["State Machine 1"],
    });

    // Add event listeners AFTER Rive has loaded
    document.querySelector('[data-button="rive-4-btn-1"]').addEventListener("click", () => setAnimation4(0));
    document.querySelector('[data-button="rive-4-btn-2"]').addEventListener("click", () => setAnimation4(1));
    document.querySelector('[data-button="rive-4-btn-3"]').addEventListener("click", () => setAnimation4(2));
    document.querySelector('[data-button="rive-4-btn-4"]').addEventListener("click", () => setAnimation4(3));
    document.querySelector('[data-button="rive-4-btn-5"]').addEventListener("click", () => setAnimation4(4));
    document.querySelector('[data-button="rive-4-btn-6"]').addEventListener("click", () => setAnimation4(5));
}

initializeRive4();

// Function to trigger animations
function setAnimation4(value) {
    if (riveInstance3) {
        const input = riveInstance4.stateMachineInputs("State Machine 1").find(i => i.name === "Number 1");
        if (input) {
            input.value = value;
        }
    }
}


///////////

document.querySelectorAll(".rive-control-btn").forEach(button => {
    console.log('aaaa')
    button.addEventListener("click", function () {
        const parentContainer = this.closest(".home-future_slide_controls");

        if (!parentContainer) return; // Safety check

        // Remove "arrow-button-rive" class from all buttons inside this container
        parentContainer.querySelectorAll(".rive-control-btn").forEach(btn => {
            btn.classList.remove("active-button");
        });

        // Add "active-button" class to the clicked button
        this.classList.add("active-button");
    });
});
