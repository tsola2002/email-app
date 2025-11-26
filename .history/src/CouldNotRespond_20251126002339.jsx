import React, { useState } from "react";
import MailToolBar from "./mail-features/MailToolBar";
import MailEditor from "./mail-features/MailEditor";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

function CouldNotRespond() {
  const [content, setContent] = useState("");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f6f7f8" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: 24 }}>
        <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
          {/* Top Profile Header */}
          <div
            style={{
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 16,
              borderBottom: "1px solid #eee",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <AccountCircleIcon sx={{ fontSize: 40, color: "#ccc" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Tarik Abaza</div>
                <div style={{ color: "#777", fontSize: 12 }}>
                  From: tarik_abaza@hotmail.com &nbsp; • &nbsp; To: Me
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ color: "#999", fontSize: 12 }}>
                2024, September 16, 08:00 am
              </div>
              <CloseIcon
                sx={{ cursor: "pointer", color: "#999", fontSize: 20 }}
              />
            </div>
          </div>

          {/* Email Title */}
          <h2 style={{ marginTop: 0, marginBottom: 8 }}>
            Your Contract Is Started
          </h2>

          {/* Email Body */}
          <div
            style={{
              marginTop: 12,
              marginBottom: 16,
              lineHeight: 1.6,
              color: "#333",
            }}
          >
            <p>Dear Sales Team,</p>
            <p>
              I've noticed a discrepancy in the latest invoice you sent us. It
              appears that we were charged twice for the same service. Can you
              please look into this as soon as possible?
            </p>
            <p>
              <strong>Thank you,</strong>
            </p>
            <p>
              John Doe
              <br />
              Customer Support Lead
            </p>
          </div>

          {/* Reason for Failure Box */}
          <section style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 8, color: "#444", fontWeight: 600 }}>
              Reason for Failure For Respond
            </div>
            <div
              style={{
                marginTop: 12,
                padding: "12px 16px",
                border: "1px solid #f5c6cb",
                background: "#fff5f6",
                color: "#b94a48",
                borderRadius: 6,
              }}
            >
              Invalid or missing customer details. The system could not find
              sufficient information about the customer to generate an automatic
              response.
            </div>
          </section>

          {/* Response Editor Section */}
          <section style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 8, color: "#444", fontWeight: 600 }}>
              Type And Send Response
            </div>

            <div
              style={{
                border: "1px solid #eee",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <MailToolBar />
              <MailEditor content={content} setContent={setContent} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 12,
              }}
            >
              <Button variant="contained" color="success">
                Send Draft
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CouldNotRespond;
