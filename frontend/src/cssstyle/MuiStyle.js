import { makeStyles } from '@material-ui/core';


//for AddUser-component
export const addEmpclasses = makeStyles({
    newEmpFormContainer: {
        width: "39vmax",
        maxWidth: "600px",
        minWidth: "200px",
        margin: "auto",
        marginTop: "140px"
      },
    head: {
        fontFamily: "Red Hat Display, sans-serif",
        color: "#8b646e",  
      },
    AddEmpBtn: {
        backgroundColor: "#a8d96f",
        color: "#4e850d",
        padding: "8px 24px",
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
        boxShadow: "1px 1px 1px 1px #81b841",
        fontWeight: "600",
        marginBottom: "14px"
      },
    err: {
        color: "red",
        marginTop: "4px"
      },
})      

//for AllUser-component
export const allEmpclasses = makeStyles({
    allEmp_H1:{
        marginTop: "100px",
        fontFamily: "Red Hat Display, sans-serif",
        color: "#8b646e"
    },
    allEmp_FilerFormSelct:{
        display: "inline-block",
        verticalAlign: "baseline"
    },
    allEmp_InptLable: {
        fontSize: "19px",
        color: "#8b646e"
    },
    allEmp_Selct: {
        width: "300px"
    },
    allEmp_DashBoard: {
        backgroundColor: "#f7e4e9",
        padding: "14px 14px",
        borderRadius: "8px",
        boxShadow: "0px 0px 9px 0px #cecece;"
    },
    allEmp_TotalValueWrpr: {
        display: "inline-block",
        verticalAlign: "baseline",
        fontFamily: "Red Hat Display, sans-serif",
        fontSize: "22px",
        marginLeft: "40px",
        backgroundColor: "#f6d4dd",
        padding: "4px 12px",
        borderRadius: "13px",
        color: "#a45f71",
        fontWeight: "600"
    },
    allEmp_TableContnr: {
        overflowX: "scroll"
    },
    allEmp_Table: {
        boxShadow: "0px 0px 9px 0px #cecece;",
        marginTop: "14px"
    },
    allEmp_TableRow: {
        '& > *': {
            textAlign: 'left',
            fontSize: "20px",
            backgroundColor: "#f7e4e9",
            color: "#9d7881",
            fontWeight: "600"
        }
    },
    allEmp_BodyTableRow: {
        '& > *': {
            textAlign: 'left',
            fontSize: "18px",
            color: "#ab8a93"
        }
    },
    allEmp_EmptyMsge: {
        color: "#a45f71",
        margin: "22px",
        fontFamily: "Red Hat Display, sans-serif",
    },
    allEmp_EdtBtn: {
        color: "#3171a3",
        boxShadow: "1px 1px 1px 1px #3283c6",
        backgroundColor: "#5baaea",
        fontWeight: "600",
        marginRight: "8px"
    },
    allEmp_DeltBtn: {
        backgroundColor: "#fc7272",
        color: "#c03737",
        boxShadow: "1px 1px 1px 1px #de3e3e",
        fontWeight: "600"
    },
    allEmp_ViewBtn: {
        backgroundColor: "#a8d96f",
        color: "#538a12",
        boxShadow: "1px 1px 1px 1px #83ba44",
        fontWeight: "600",
        marginRight: "8px"
    },
})

//for Edit-component
export const editEmpclasses = makeStyles({
    editFormContainer: {
        width: "39vmax",
        maxWidth: "600px",
        minWidth: "200px",
        margin: "auto",
        marginTop: "140px"
    },
    editEmp_head: {
        marginTop: "100px",
        fontFamily: "Red Hat Display, sans-serif",
        color: "#8b646e",
        width: "550px"
      },
    editEmp_btn: {
        marginTop: "32px",
        backgroundColor: "#a8d96f",
        color: "#4e850d",
        padding: "8px 24px",
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
        boxShadow: "1px 1px 1px 1px #81b841",
        fontWeight: "600",
        marginBottom: "14px"
      },
    editEmp_err: {
        color: "red"
      },
})  

//for ErrorPop-component
export const errEmpclasses = makeStyles({
    errPop_divWraper: {
        color: "#ffffff",
        padding: "8px 18px",
        position: "fixed",
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
        borderRadius: "8px",
        backgroundColor: "#ff8279",
        boxShadow: "0px 1px 5px 1px #d7929c",
        width: "30vmax",
        top: "80px",
        margin: "auto",
        top: "90px",
        right: "0",
        left: "0",
        textAlign: "center",

        '& > *': {
            margin: "0"
        }
    }  
})

//for footer-component
export const footrEmpclasses = makeStyles({
    footEmp_Contnr: {
        fontSize: "14px",
        textAlign: "center",
        fontFamily: "Red Hat Display, sans-serif",
        minWidth: "300px",
        maxWidth: "560px",
        color: "#c7a3a9",
        margin: "auto",
        marginTop: "20px"
    },
    footEmp_Decoration: {
        color: "#91555e"
    },

})

//for home-component
export const homeEmpclasses = makeStyles({
    container: {
        width: "44vmax",
        textAlign: "center",
        position: "relative",
        margin: "auto",
        marginTop: "260px"
    },
    HomeBtnCreat: {
        backgroundColor: "#a8d96f",
        color: "#4e850d",
        padding: "8px 24px",
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
        boxShadow: "1px 1px 1px 1px #81b841",
        fontWeight: "600"
     },
    hello: {
        fontFamily: "'Red Hat Display', sans-serif",
        color: "#91555e",
        fontSize: "54px",
        textShadow: "0px 0px 4px #b2b1b1"
    },
    HomePStyle: {
        color: "#c7a3a9",
        width: "44vmax",
        margin: "auto",
        fontSize: "14px",
        marginTop: "60px",
        textAlign: "center",
        fontFamily: "Red Hat Display, sans-serif"
    },

})

//for NavBar-component
export const navEmpclasses = makeStyles({
    
    navEmp_header: {
        background: "#cdeea7",
        color: "white",
        display: "flex",
        alignItems: "center"
      },
    
    navEmp_menus: {
        textDecoration: "none",
        color: "#4e850d",
        marginRight: "12px",
        fontFamily: "Red Hat Display, sans-serif",
        fontWeight: "600",
        fontSize: "18px",
        background: "#a8d96f",
        padding: "6px 12px",
        borderRadius: "6px",
        boxShadow: "1px 1px 1px 1px #81b841"
      },
    navEmp_active: {
        boxShadow: "1px 1px 6px 1px #263f09;"
      },
    })

//for NotFound-component
export const notFndEmpclasses = makeStyles({
    notFndEmp_Contnr: {
        marginTop: '200px',
        position: "relative",
        width: "50vmax",
        margin: "auto",
        marginBottom: "292px"
    },    
    notFndEmp_Messg: {
        fontFamily: "Red Hat Display, sans-serif",
        color: "#8b646e",
      },
    notFndEmp_Code: {
        fontFamily: "Red Hat Display, sans-serif",
        color: "#8b646e",
        fontWeight: "900"
      },
    notFndEmp_Btn: {
        color: "#8b646e",
        backgroundColor: "white"
    }  
})

//for PopUp-component    
export const popUpEmpclasses = makeStyles({
    popUpEmp_Cntnr: {
        top: "129px",
        padding: "10px",
        position: "fixed",
        minWidth: "300px",
        borderRadius: "8px",
        backgroundColor: "#e6bfbfcf",
        left: "0px",
        right: "0px",
        width: "300px",
        margin: "auto",
        boxShadow: "0px 1px 14px 1px #b59198"
    },
    popUpEmp_CloseBtn: {
        top: "-20px",
        color: "#885757",
        right: "-20px",
        cursor: "pointer",
        display: "inline-block",
        position: "absolute",
        borderRadius: "10px",
        backgroundColor: "#f7b6b6",
        padding: "2px 4px",
        textAlign: "center"
    },
    popUpEmp_Img: {
        width: "302px",
        height: "238px"
    },
    popUpEmp_EmpInfoWrpr: {
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
    },
    popUpEmp_lbleVlueWrpr: {
        marginBottom: "12px",
        borderBottom: "1px solid #d19e9e"
    },
    popUpEmp_lbel: {
        color: "#583c3c",
        fontSize: "14px",
    },
    popUpEmp_vlue: {
        color: "#583c3c",
        fontWeight: "600"
    }
    
 });
