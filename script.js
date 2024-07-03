function saveFormData(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      repeatEmail: document.getElementById('repeatEmail').value,
      passportNumber: document.getElementById('passportNumber').value,
      citizenship: document.getElementById('citizenship').value,
      telephoneNumber: document.getElementById('telephoneNumber').value,
      visaCategory: document.getElementById('visaCategory').value
  };

  // Validate email fields match
  if (formData.email !== formData.repeatEmail) {
      alert("Emails do not match!");
      return;
  }

  // Convert form data to JSON string
  const jsonString = JSON.stringify(formData, null, 2);

  // Create a blob with the JSON string
  const blob = new Blob([jsonString], { type: "application/json" });

  // Create a link element
  const link = document.createElement("a");

  // Set the download attribute with a filename
  link.download = "formData.json";

  // Create an object URL for the blob
  link.href = URL.createObjectURL(blob);

  // Append the link to the body
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}
