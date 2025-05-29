import nodemailer from "nodemailer";

// --- TEMPLATE FUNCTIONS ---
function getContactTemplate(data) {
  const {
    first_name,
    last_name,
    email,
    phone,
    street_address = "Not Provided",
    city = "Not Provided",
    state_region = "Not Provided",
    postal_code,
    message,
  } = data;

  return `
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">First Name</span>
          <div class="form-value">${first_name}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Last Name</span>
          <div class="form-value">${last_name}</div>
        </div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">Email</span>
          <div class="form-value">${email}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Phone Number</span>
          <div class="form-value">${phone}</div>
        </div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-item">
        <span class="form-label">Street Address</span>
        <div class="form-value">${street_address}</div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">City</span>
          <div class="form-value">${city}</div>
        </div>
        <div class="form-item">
          <span class="form-label">State/Region</span>
          <div class="form-value">${state_region}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Postal Code</span>
          <div class="form-value">${postal_code}</div>
        </div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-item">
        <span class="form-label">Message</span>
        <div class="form-value">${message}</div>
      </div>
    </div>
  `;
}

function getQuoteTemplate(data) {
  const {
    first_name,
    last_name,
    email,
    phone,
    street_address = "Not Provided",
    city = "Not Provided",
    state_region = "Not Provided",
    postal_code,
    material_request,
    material_amount,
  } = data;

  return `
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">First Name</span>
          <div class="form-value">${first_name}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Last Name</span>
          <div class="form-value">${last_name}</div>
        </div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">Email</span>
          <div class="form-value">${email}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Phone Number</span>
          <div class="form-value">${phone}</div>
        </div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">Material Request</span>
          <div class="form-value">${material_request}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Amount / Sqr Ft</span>
          <div class="form-value">${material_amount}</div>
        </div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-item">
        <span class="form-label">Street Address</span>
        <div class="form-value">${street_address}</div>
      </div>
    </div>
    <div class="form-field">
      <div class="form-group">
        <div class="form-item">
          <span class="form-label">City</span>
          <div class="form-value">${city}</div>
        </div>
        <div class="form-item">
          <span class="form-label">State/Region</span>
          <div class="form-value">${state_region}</div>
        </div>
        <div class="form-item">
          <span class="form-label">Postal Code</span>
          <div class="form-value">${postal_code}</div>
        </div>
      </div>
    </div>
  `;
}

function getHtmlWrapper(bodyContent, title = "New Contact Form Submission") {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9f9f9;
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        .form-field {
          background: #fff;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .form-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .form-item {
          flex: 1;
          min-width: 150px;
        }
        .form-label {
          font-weight: bold;
          color: #555;
          display: block;
          margin-bottom: 5px;
        }
        .form-value {
          padding: 8px;
          background: #f5f5f5;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      ${bodyContent}
    </body>
    </html>
  `;
}

export async function POST(request) {
  const requestBody = await request.json();
  console.log("SMTP Request Received: ", requestBody);

  // Determine which template to use
  const templateType = requestBody.message ? 'contact' : 'quote';
  let emailBody, emailSubject, emailTitle;

  if (templateType === 'contact') {
    emailBody = getContactTemplate(requestBody);
    emailSubject = "B&C Contact Form Submission";
    emailTitle = "New Contact Form Submission";
  } else {
    emailBody = getQuoteTemplate(requestBody);
    emailSubject = "B&C Quote Request";
    emailTitle = "New Quote Request";
  }

  const html = getHtmlWrapper(emailBody, emailTitle);

  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: '"B&C Contact" <no-reply@example.com>',
    to: "ammonburgi@gmail.com",
    subject: emailSubject,
    html: html,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}