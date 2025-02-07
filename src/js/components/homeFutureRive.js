// import Rive from "rive-canvas";



//   // Create a canvas element for Rive
//   const canvas = document.createElement("canvas");
//   canvas.id = "rive-canvas"; // Assign an ID if needed
//   document.getElementById("rive-container").appendChild(canvas);

//   // Load Rive file and detect state machine names
//   const riveInstance = new Rive({
//     src: "https://public.rive.app/hosted/40873/221498/Zdmg8EMqP0iG5-IYCXgGYA.riv",
//     canvas: canvas,
//     autoplay: true,
//     stateMachines: ["State Machine 1"]
//     onLoad: () => {
//       console.log("✅ Rive file loaded successfully!");
      
//       // Log the entire Rive instance for debugging
//       console.log("🔍 Full Rive Instance:", riveInstance);

//       // Attempt to fetch state machines
//       setTimeout(() => {  // 🔹 Ensure Rive has fully initialized
//         const stateMachineNames = riveInstance.stateMachineNames || [];
//         console.log("🎛 Detected State Machines:", stateMachineNames);

//         if (stateMachineNames.length === 0) {
//           console.warn("⚠ No state machines detected! Check your Rive file.");
//           return;
//         }

//         // Detect triggers inside each state machine
//         stateMachineNames.forEach((stateMachine) => {
//           try {
//             const triggers = riveInstance.stateMachineInputs(stateMachine);
//             console.log(`🎯 Triggers for ${stateMachine}:`, triggers);

//             // Display results on the page
//             const output = document.getElementById("output");
//             output.innerHTML += `<strong>State Machine: ${stateMachine}</strong><br>`;
//             output.innerHTML += `Triggers: <br><pre>${JSON.stringify(triggers, null, 2)}</pre><br>`;
//           } catch (error) {
//             console.error(`❌ Error fetching triggers for ${stateMachine}:`, error);
//           }
//         });
//       }, 1000);  // ⏳ Small delay to ensure Rive fully loads
//     },
//     onError: (error) => {
//       console.error("❌ Rive failed to load:", error);
//     }
//   });

//   // Button to manually list state machines and triggers
//   document.getElementById("list-triggers").addEventListener("click", () => {
//     const output = document.getElementById("output");
//     output.innerHTML = ""; // Clear previous results

//     const stateMachineNames = riveInstance.stateMachineNames || [];
//     console.log("📌 Manually detected State Machines:", stateMachineNames);

//     if (stateMachineNames.length === 0) {
//       output.innerHTML = "<strong>No state machines found!</strong>";
//       return;
//     }

//     stateMachineNames.forEach((stateMachine) => {
//       try {
//         const triggers = riveInstance.stateMachineInputs(stateMachine);
//         output.innerHTML += `<strong>State Machine: ${stateMachine}</strong><br>`;
//         output.innerHTML += `Triggers: <br><pre>${JSON.stringify(triggers, null, 2)}</pre><br>`;
//       } catch (error) {
//         console.error(`❌ Error fetching triggers for ${stateMachine}:`, error);
//       }
//     });
//   });

