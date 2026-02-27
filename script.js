const heading = document.querySelector("h1");
const container = document.getElementById("container");
const button = document.querySelector("#btn");
const resultDiv = document.getElementById("card");
const downloadBtn = document.getElementById("downloadBtn");

// Hide download button initially
downloadBtn.style.display = "none";

// Generate ID Card
button.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const rollNo = document.getElementById("rollNum").value.trim();
  const course = document.getElementById("course").value;
  const session = document.getElementById("session").value.trim();

  if (!name || !fatherName || !rollNo || !session || course === "Select Course") {
    alert("All fields are required!");
    return;
  }

  heading.textContent = "Student ID Card";

  resultDiv.innerHTML = `
    <div class="id-card" style="animation: fadeIn 0.5s ease;">
      <h2>${name}</h2>
      <p><strong>Father:</strong> ${fatherName}</p>
      <p><strong>Roll No:</strong> ${rollNo}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Session:</strong> ${session}</p>
    </div>
  `;

  container.style.display = "none";
  resultDiv.style.display = "block";
  downloadBtn.style.display = "block";
});

// Download ID Card as PNG
downloadBtn.addEventListener("click", () => {
  html2canvas(resultDiv).then(canvas => {
    const link = document.createElement("a");
    link.download = "ID_Card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});