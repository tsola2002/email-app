import React from "react";
import logo from "./assets/logo.png"
export default function EmailPage() {
  return (
    <div style={styles.container}>
      
      {/* LEFT SIDEBAR */}
      <div style={styles.sidebar}>

        {/* Logo Section */}
        <div style={styles.logoBox}>
          <img 
            src={logo} 
            alt="Logo"
            style={{width:"200px"}}
          />
          <h3 style={styles.logoText}></h3>
        </div>

           {/* Menu */}
        <div style={styles.menu}>
          {/* Email dropdown */}
          <div style={styles.menuHeader}>
  <span style={styles.left}>
    ✉️ E-mail
  </span>

  <span style={styles.right}>
    ^
  </span>
</div>
<div style={{marginLeft:"40px", color:"green"}}>
         <div style={styles.menuItemActive}>Mailbox 1</div>
          <div style={styles.menuTem}>Mailbox 2</div>
          </div>

          <br />

          <div style={styles.menuItem}>
            <span style={styles.icon}>👤</span> User List
          </div>

          <div style={styles.menuItem}>
            <span style={styles.icon}>🏦</span> Companies
          </div>

          <div style={styles.menuItem}>
            <span style={styles.icon}>📤</span> Mailboxes
          </div>

          <div style={styles.menuItem}>
            <span style={styles.icon}>🚫</span> Rejected E-Mail
          </div>
          <div style={styles.logoutStyle}> [→ Log out</div>
        </div>

      </div>

      {/* RIGHT CONTENT AREA */}
      <div style={styles.content}>

        {/* Header */}
        <div style={styles.header}> <b>E-Mail</b>
          {/* Right User Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Avatar */}
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#333" }} />

        {/* Name + Role */}
        <div style={{ display: "flex", flexDirection: "column", textAlign: "right", lineHeight: "1.1" }}>
          <span style={{ fontWeight: 500 }}>Tarik Abaza</span>
          <span style={{ fontSize: "13px", color: "#000000ff" }}>Admin</span>
        </div>

        {/* Dropdown Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#000000ea" }}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* </div> */}

        </div>
         <div style={styles.longS}>
      {/* Left Title */}
      <div style={{
  //       width: "100%",               // full width of main area
  // padding: "40px",
  // left:0,
  // backgroundColor: "#fff",
  // borderBottom: "1px solid #ccc",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  // margin: 0,
  }}>


      </div>
    </div>
    
        {/* Sender block */}
        <div style={styles.senderBox}>
          <div style={styles.senderRow}>
            <div style={styles.avatar}></div>

          <div style={styles.emailHeader}>
              <div style={styles.senderSection}>
                <h3 style={styles.senderName}>Tarik Abaza</h3>
                <p style={styles.senderEmail}>from: tarik_abaza@hotmail.com . To: Me</p>

              </div>
              <div style={styles.dateSection}>
                <p style={styles.dateText}>2024, september 16, 06:00 AM     X</p>
              </div>

            </div>
            </div>
          <p style={styles.date}></p>
        

        {/* Subject */}
        <div style={styles.subjectBox}>
          <span style={styles.autoRespondTag}> ↹↹  AUTO RESPOND</span>
          <h3 style={styles.subjectText}>Your Contract Is Started</h3>
        </div>

        {/* Body */}
        <div style={styles.emailBody}>
          <p>Dear Sales Team,</p>
          
          <p>
            I've noticed a discrepancy in the latest invoice you sent us. It
            appears that we were charged twice for the same service. Can you
            please look into this as soon as possible?
          </p>
          
          <p>
            Thank you,<br/>
            John Doe<br/>
            Customer Support Lead<br/>
            Customer Inc.
          </p>
        </div>

        {/* Response */}
        <div style={styles.responseBox}>
          <h3 style={styles.responseHeader}>Response</h3>

          <p>Dear Sales Team,</p>
          
          <p>
            I've noticed a discrepancy in the latest invoice you sent us. It
            appears that we were charged twice for the same service. Can you
            please look into this as soon as possible?
          </p>
          
          <p>
            Thank you,<br />
            John Doe<br />
            Customer Support Lead<br />
            Customer Inc.
          </p>
        </div>

      </div>
    </div>
    </div>

  );
}


/* ------------ STYLES ------------ */
const styles = {
   container: {  
    margin:0,
    padding:0,
    flex :1,
    // flexDirection:"column",

    display: "flex",
    Height: "100vh",
    backgroundColor: "rgba(240, 240, 240, 0.9)",
    // fontFamily: "Arial, sans-serif",
  },

  /* Sidebar */
  sidebar: {
    width: "250px",
    backgroundColor: "#f8f8f8ff",
    paddingTop: "20px ",
    height:"100vh",
    borderRight: "1px solid #ccc",
  },

  logoBox: {
    textAlign: "center",
    marginBottom: "30px",
  },

  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },

  logoText: {
    marginTop: "10px",
    color: "#d99039",
    fontWeight: "bold",
    fontSize: "20px",
  },

  menu: {
    marginTop: "20px",
  },

  menuHeader: {
    display: "flex",
    justifyContent: "space-between", // pushes them apart
    alignItems: "center",
    padding:"20px",
    fontSize:"20px",
    width: "90%",
    backgroundColor: "#d4f4dd",
    padding: "10px 15px",
    borderBottom: "3px solid #ddd",
  },

  left: {
    fontSize: "18px",
    fontWeight: "600",
    color:"green",

  },

  right: {
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
    color:"green",
  },
  menuTem:{
    padding:"10px 15px",
    cursor:"pointer",
    color:"#444",
    lineHeight:"1.8",


  },

  menuItem: {
    padding: "10px 15px",
    cursor: "pointer",
    color: "#444",
    
  },



  menuItemActive: {
    padding: "10px 15px",
    backgroundColor: "#d4f4dd",
    borderRadius: "6px",
    display:"flex",
    
    lineHeight:"1.8",

    
    // marginBottom: "5px",
    fontWeight: "bold",
  },
  logoutStyle:{
    position:"fixed",
    bottom: "20px",
    left: "20px",

  },

  /* Right content */
  content: {
    flex: 1,
    padding: 0,
  },

  header: {
    width: "100%",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ccc",
  padding: "20px",
  margin: 0,
  display: "flex",
  justifyContent: "space-between",   // <-- THIS CREATES SPACE IN THE MIDDLE
  alignItems: "center",
  fontWeight: "bold",
  fontSize:"20px",
  },

  // longS:{
  //   width: "100%",
  //   marginleft:"250px",
  // height: "65px",
  // backgroundColor: "#ffffff",
  // display: "flex",
  // // alignItems: "center",
  // justifyContent: "space-between",
  // padding: "20px",
  // position: "fixed",
  // textAlign: "center",
  // top: 0,
  // left: 0,
  // zIndex: 100,
  // borderBottom: "1px solid #ddd",
  // boxSizing: "border-box",
  // },
  


  senderBox: {
    background: "#fff",
    padding: "20px",
    height:"100vh",
    // borderRadius: "10px",
    marginBottom: "20px",
    marginTop:"50px",
    margin:"20px auto",
    marginLeft:"20px",
    // boxShadow: "0 4px 3px ",
    boxSizing:"border-box",
  },

  senderRow: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  avatar: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#000000ff",
  },

  emailHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: "15px",
    borderBottom: "1px solid #ddd"
  },

  senderSection: {
    display: "flex",
    flexDirection: "column",
  },

  senderName: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "600",
  },

  senderEmail: {
    margin: 0,
    fontSize: "14px",
    color: "#777",
  },

  dateSection: {},

  dateText: {
    fontSize: "14px",
    color: "#555",
  },
  subjectBox: {
    marginBottom: "20px",
  },

  autoRespondTag: {
    color: "#0c7a0c",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  subjectText: {
    marginTop: "10px",
    fontSize: "20px",
  },

  emailBody: {
    // background: "#fff",
    // padding: "20px",
    // borderRadius: "10px",
    // marginBottom: "20px",
    // lineHeight: "1.6",
    // boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  },

  responseBox: {
    // background: "#fff",
    // padding: "20px",
    // borderRadius: "10px",
    // lineHeight: "1.6",
    // boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  },

  responseHeader: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};