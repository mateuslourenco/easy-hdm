function createInputSSID5G(parent) {
    const ssid5 = document.createElement("input");
    Object.assign(ssid5, {
        id: "ssid5",
        placeholder: "SSID 5.0GHz",
        type: "text",
        class: "um-sete-dois",
    });
    let isSSID = document.querySelector(".opt-ssid").checked;
    if(!isSSID) {
        ssid5.setAttribute("disabled", "disabled");
    }
    parent.appendChild(ssid5);
}
function createInputPassword5G(parent) {
    const pw5 = document.createElement("input");
    Object.assign(pw5, {
        id: "password5",
        placeholder: "Password 5.0GHz",
        type: "text",
        class: "um-sete-dois",
    });
    let isPW = document.querySelector(".opt-pw").checked;
    if(!isPW) {
        pw5.setAttribute("disabled", "disabled");
    }
    parent.appendChild(pw5);
}
function removeInput5G(parent) {
    const ssid5 = document.getElementById("ssid5") || undefined;
    const password5 = document.getElementById("password5") || undefined;
    if (ssid5 !== undefined) {
        parent.removeChild(ssid5);
        parent.removeChild(password5);
    }
}
function checkIsOther5G() {
    limparResultado();
    addDisabled();
    const checkBox = document.querySelector(".other5");
    const parent = document.getElementById("gerador");

    if (checkBox.checked === true) {
        const check5G = document.getElementById("ssid5") || undefined;
        if (!check5G) {
            createInputSSID5G(parent);
            createInputPassword5G(parent);

        }
    } else {
        removeInput5G(parent);
    }
}
function checkIsOnly5G(){
    let checkBoxOnly5G = document.querySelector(".only5");
    let checkBoxCH = document.querySelector(".opt-canal");
    let ch = document.getElementById("canal");
    if (checkBoxOnly5G.checked === true) {
        checkBoxCH.setAttribute("disabled", "disabled");
        checkBoxCH.checked = false;
        ch.value = "";
        ch.setAttribute("disabled", "disabled");
    } else {
        checkBoxCH.removeAttribute("disabled");
    }
}
function checkOPT() {
    let isSSSID = document.querySelector(".opt-ssid").checked;
    let isPW = document.querySelector(".opt-pw").checked;
    let isChannel = document.querySelector(".opt-canal").checked;
    let inputSSID = document.querySelector("#ssid");
    let inputSSID5 = document.querySelector("#ssid5") || undefined;
    let inputPW = document.querySelector("#password");
    let inputPW5 = document.querySelector("#password5") || undefined;
    let inputCH = document.querySelector("#canal") || undefined;
    if(!isSSSID) {
        inputSSID.value = "";
        inputSSID.setAttribute("disabled", "disabled");
        if(inputSSID5 !== undefined) {
            inputSSID5.value = "";
            inputSSID5.setAttribute("disabled", "disabled");
        }
    } else {
        if(inputSSID.hasAttribute("disabled")) {
            inputSSID.removeAttribute("disabled");
        }
        if(inputSSID5) {
            if(inputSSID5.hasAttribute("disabled")) {
            inputSSID5.removeAttribute("disabled");
            }
        }
    }
    if(!isPW) {
        inputPW.value = "";
        inputPW.setAttribute("disabled", "disabled");
        if(inputPW5 !== undefined) {
            inputPW5.value = "";
            inputPW5.setAttribute("disabled", "disabled");
        }
    } else {
        if(inputPW.hasAttribute("disabled")) {
            inputPW.removeAttribute("disabled");
        }
        if(inputSSID5) {
            if(inputPW5.hasAttribute("disabled")) {
                inputPW5.removeAttribute("disabled");
            }
        }
    }
    if(!isChannel) {
        inputCH.value = "";
        inputCH.setAttribute("disabled", "disabled");
    } else {
        if(inputCH.hasAttribute("disabled")) {
            inputCH.removeAttribute("disabled");
        }
        inputCH.value = 1;
    }
}
function checkSSID(ssid) {
    if (ssid === "") {
        alert("Digite o SSID!!");
        return false;
    } else {
        return true;
    }
}
function checkPW(password) {
    if (password === "" || password.length < 8) {
        alert("Digite uma senha com mais de oito caracteres!!");
        return false;
    } else {
        return true;
    }
}
function checkCH(ch) {
    if (ch < 1 || ch > 12) {
        alert("Informe um canal entre 1 e 12");
        return false;
    }
}
function createJSON() {

    let isOnly2 = document.querySelector("#somente-dois-ponto-quatro").checked;
    let isOnly5 = document.querySelector("#somente-cinco-ponto-zero").checked;
    let isOther5 = document.querySelector("#redes-diferentes").checked || undefined;
    let isSSID = document.querySelector(".opt-ssid").checked;
    let isCH = document.querySelector(".opt-canal").checked;
    let isPW = document.querySelector(".opt-pw").checked;
    let ssid = document.getElementById("ssid").value;
    let password = document.getElementById("password").value;
    let ch = document.getElementById("canal").value;

    let chkSSID = undefined;
    let chkPW = undefined;
    let chkCH = undefined;

    reset5G();
    reset2G();
    limparResultado();

    if(isSSID && isPW) {
        chkSSID = checkSSID(ssid);
        chkPW = checkPW(password);
    } else if(isSSID) {
        chkSSID = checkSSID(ssid);
    } else if(isPW) {
        chkPW = checkPW(password);
    } else if(isCH){
        chkCH = checkCH(ch);
    } else {
        chkSSID = false;
        alert("Selecione no minimo uma opção");
    }

    if(chkSSID !== false && chkPW !== false) {

        const createWifi2 = (ssid1, password1) => JSON.stringify({ index: "1", ssid: ssid1, password: password1 });
        const createWifi2CH = (ssid1, password1, ch) => JSON.stringify({ index: "1", ssid: ssid1, password: password1, channel: ch});
        const createWifi5 = (ssid1, password1) => JSON.stringify({ index: "5", ssid: `${ssid1}-5G`, password: password1 });
        const createOnly5 = (ssid1, password1) => JSON.stringify({ index: "5", ssid: ssid1, password: password1 });
        const createSSID2 = (ssid1) => JSON.stringify({ index: "1", ssid: ssid1});
        const createSSID2CH = (ssid1, ch) => JSON.stringify({ index: "1", ssid: ssid1, channel: ch});
        const createSSID5 = (ssid1) => JSON.stringify({ index: "5", ssid: `${ssid1}-5G`});
        const createOnlySSID5 = (ssid1) => JSON.stringify({ index: "5", ssid: ssid1});
        const createPW2 = (password1) => JSON.stringify({ index: "1", password: password1 });
        const createPW2CH = (password1, ch) => JSON.stringify({ index: "1", password: password1, channel: ch });
        const createPW5 = (password1) => JSON.stringify({ index: "5", password: password1 });
        const createCH = (ch) => JSON.stringify({ index: "1", channel: ch });
        let result;
        if (isOnly2) {
            if(isCH && chkCH !== false){
                if (isSSID && isPW) {
                result = createWifi2CH(ssid, password, ch);
                } else if (isSSID) {
                    result = createSSID2CH(ssid, ch);
                } else if (isPW){
                    result = createPW2CH(password, ch);
               } else {
                    result = createCH(ch);
               }
            }
            else {
                if (isSSID && isPW) {
                    result = createWifi2(ssid, password);
                } else if (isSSID) {
                    result = createSSID2(ssid);
                } else {
                    result = createPW2(password);
                }
            }
            document.getElementById("result2").setAttribute("value", result);
            document.getElementById("btn-result5").setAttribute("disabled", "disabled");
        } else if (isOnly5) {
            if (isSSID && isPW) {
                result = createOnly5(ssid, password);
            } else if (isSSID) {
                result = createOnlySSID5(ssid);
            } else {
                result = createPW5(password);
            }
            document.getElementById("result5").setAttribute("value", result);
            document.getElementById("btn-result2").setAttribute("disabled", "disabled");
        } else if (isOther5) {
            let result2;
            let result5;
            let ssid5 = document.getElementById("ssid5").value;
            let pw5 = document.getElementById("password5").value;
            if(isSSID && isPW) {
                chkSSID = checkSSID(ssid5);
                chkPW = checkPW(pw5);
            } else if(isSSID) {
                chkSSID = checkSSID(ssid5);
            } else {
                chkPW = checkPW(pw5);
            }
            if(chkSSID !== false && chkPW !== false){
                if (isCH) {
                    if (isSSID && isPW) {
                        result2 = createWifi2CH(ssid, password, ch);
                        result5 = createOnly5(ssid5, pw5);
                    } else if (isSSID) {
                        result2 = createSSID2CH(ssid, ch);
                        result5 = createOnly5(ssid5);
                    } else {
                        result2 = createPW2CH(password, ch);
                        result5 = createPW5(pw5);
                    }
                } else {
                    if (isSSID && isPW) {
                        result2 = createWifi2(ssid, password);
                        result5 = createOnly5(ssid5, pw5);
                    } else if (isSSID) {
                        result2 = createSSID2(ssid);
                        result5 = createOnly5(ssid5);
                    } else {
                        result2 = createPW2(password);
                        result5 = createPW5(pw5);
                    }
                }
            }
            document.getElementById("result2").setAttribute("value", result2);
            document.getElementById("result5").setAttribute("value", result5);
        } else {
                let result2;
                let result5;
                if (isCH) {
                    if (isSSID && isPW) {
                        result2 = createWifi2CH(ssid, password, ch);
                        result5 = createWifi5(ssid, password);
                    } else if (isSSID) {
                        result2 = createSSID2CH(ssid, ch)
                        result5 = createSSID5(ssid)
                    } else if (isPW){
                        result2 = createPW2CH(password, ch)
                        result5 = createPW5(password)
                    } else {
                        result2 = createCH(ch)
                        result5 = "{}"
                    }

                } else {
                    if (isSSID && isPW) {
                        result2 = createWifi2(ssid, password)
                        result5 = createWifi5(ssid, password)
                    } else if (isSSID) {
                        result2 = createSSID2(ssid)
                        result5 = createSSID5(ssid)
                    } else if (isPW) {
                        result2 = createPW2(password)
                        result5 = createPW5(password)
                    } 
                }
                document.getElementById("result2").setAttribute("value", result2);
                document.getElementById("result5").setAttribute("value", result5);
            }
    }
}
function addDisabled() {
    const btn2 = document.getElementById("btn-result2");
    const btn5 = document.getElementById("btn-result5");
    btn2.setAttribute("disabled", "disabled");
    btn5.setAttribute("disabled", "disabled");
}
function removeDisabled(btn) {
    if(btn.hasAttribute("disabled")) {
            btn.removeAttribute("disabled");
        }
}
function reset2G(){
    const btn2 = document.getElementById("btn-result2");
    btn2.setAttribute("class", "btn btn-primary");
    btn2.innerHTML = "Copiar 2.4GHz";
    removeDisabled(btn2);
}
function reset5G(){
    const btn5 = document.getElementById("btn-result5");
    btn5.setAttribute("class", "btn btn-primary");
    btn5.innerHTML = "Copiar 5.0GHz";
    removeDisabled(btn5);
}
function limparDados() {
    let ssid2G = document.getElementById("ssid");
    let password2G = document.getElementById("password");
    ssid2G.value = "";
    password2G.value = "";

    let ssid5G = document.getElementById("ssid5") || undefined;
    let password5G = document.getElementById("password5") || undefined;
    if(ssid5G !== undefined) {
        ssid5G.value = "";
        password5G.value = "";
    }
}
function limparResultado() {
    document.getElementById("result2").setAttribute("value", "");
    document.getElementById("result5").setAttribute("value", "");
}
function cleanBtnCopy(rede) {
    if (rede === "result2") {
        let resultado2 = document.querySelector("#btn-result2");
        resultado2.innerHTML = "Copiado!";
        resultado2.setAttribute("class", "btn btn-success");
        reset5G();
        setTimeout(reset2G, 500);
    } else if (rede === "result5") {
        let resultado5 = document.querySelector("#btn-result5");
        resultado5.innerHTML = "Copiado!";
        resultado5.setAttribute("class", "btn btn-success");
        setTimeout(reset5G, 500);
    } else if (rede === "resultado-voip") {
        let sip = document.querySelector("#btn-sip");
        sip.innerHTML = "Copiado!";
        sip.setAttribute("class", "btn btn-success");
        setTimeout(resetSIP, 500);
    } else {
        let port = document.querySelector("#btn-port");
        port.innerHTML = "Copiado!";
        port.setAttribute("class", "btn btn-success");
        setTimeout(resetPort, 500)
    }
}
function copy(rede) {
    const txt = document.getElementById(rede);
    txt.select();
    document.execCommand("copy");
    cleanBtnCopy(rede);
}


function resetSIP(){
    const btn_sip = document.getElementById("btn-sip");
    btn_sip.setAttribute("class", "btn btn-primary");
    btn_sip.innerHTML = "Copiar";
    removeDisabled(btn_sip);
}
function resetPort(){
    const btn_port = document.getElementById("btn-port");
    btn_port.setAttribute("class", "btn btn-primary");
    btn_port.innerHTML = "Copiar";
    removeDisabled(btn_port);
}
function criarSIP(){
    const dir_numero = document.querySelector("#dir-numero").value;
    const user_name = document.querySelector("#user-name").value;
    const auth_password = document.querySelector("#auth-password").value;
    const proxy_sv = document.querySelector("#proxy-sv").value;
    const registrar_sv = document.querySelector("#registrar-sv").value;
    const user_agent = document.querySelector("#user-agent").value;
    const outbound_proxy = document.querySelector("#outbound-proxy").value;
    const phy_ref = document.querySelector("#phy-ref").value;

    const acao = document.querySelector(".set-voip").checked;

    const cancel_voip = (numero) => JSON.stringify({directoryNumber: numero});
    const criar_voip = (dir_numero, user_name, auth_password, proxy_sv, registrar_sv,
                        user_agent, outbound_proxy, phy_ref
                        ) => JSON.stringify({
                            "DirectoryNumber": dir_numero,
	                        "AuthUserName": user_name,
	                        "AuthPassword": auth_password,
	                        "ProxyServer": proxy_sv,
	                        "RegistrarServer": registrar_sv,
	                        "UserAgentDomain": user_agent,	
	                        "OutboundProxy": outbound_proxy,
	                        "phyReferenceList": phy_ref
                        });

    const resultado = document.querySelector("#resultado-voip");
    let voip = '';
    if(acao === true) {
        voip = criar_voip(
            dir_numero,
            user_name,
            auth_password,
            proxy_sv,
            registrar_sv,
            user_agent,
            outbound_proxy,
            phy_ref
        );
        resultado.setAttribute("value", voip);
    }
    else{
        voip = cancel_voip(dir_numero);
        resultado.setAttribute("value", voip);
    }
    resetSIP();
}

function checkOptSIP(){
    acao = document.querySelector(".set-voip").checked;

    const user_name = document.querySelector("#user-name");
    const auth_password = document.querySelector("#auth-password");
    const proxy_sv = document.querySelector("#proxy-sv");
    const registrar_sv = document.querySelector("#registrar-sv");
    const user_agent = document.querySelector("#user-agent");
    const outbound_proxy = document.querySelector("#outbound-proxy");

    if (acao === true){
        document.querySelectorAll(".opcoes-sip").forEach(e => {e.removeAttribute("disabled", "disabled")});
    } else {
        document.querySelectorAll(".opcoes-sip").forEach(e => {e.setAttribute("disabled", "disabled")});
    }
}

function regraDePortas(){
    const udp = document.querySelector(".opt-udp").checked;
    const tcp = document.querySelector(".opt-tcp").checked;

    const internal_client = document.querySelector("#ip-interno").value;
    const internal_port = document.querySelector("#porta-interna").value;
    const external_port = document.querySelector("#porta-externa").value;
    const port_name = document.querySelector("#port-name").value;

    const criar_udp_tcp = (internal_client, internal_port,
                            external_port, port_name) => JSON.stringify({
                                "enable":"true",
                                "internalClient":internal_client,
                                "internalPort":internal_port,
                                "externalPort":external_port,
                                "portMapName":port_name,
                                "protocol":"TCP,UDP"
                            });
    const criar_tcp = (internal_client, internal_port,
                            external_port, port_name) => JSON.stringify({
                                "enable":"true",
                                "internalClient":internal_client,
                                "internalPort":internal_port,
                                "externalPort":external_port,
                                "portMapName":port_name,
                                "protocol":"TCP"
                            });
    const criar_udp = (internal_client, internal_port,
                            external_port, port_name) => JSON.stringify({
                                "enable":"true",
                                "internalClient":internal_client,
                                "internalPort":internal_port,
                                "externalPort":external_port,
                                "portMapName":port_name,
                                "protocol":"UDP"
                            });

    let validar_infos;
    let result;
    const info_portas = document.querySelectorAll(".porta");
    info_portas.forEach(e => {
        if(e.value === ""){
            validar_infos = false;
        } else {
            validar_infos = true;
        }
    });

    if (validar_infos === true) {
        if (udp && tcp) {
            result = criar_udp_tcp(internal_client, internal_port,
                external_port, port_name)
        } else if (udp){
            result = criar_udp(internal_client, internal_port,
                external_port, port_name)
        } else if (tcp){
            result = criar_tcp(internal_client, internal_port,
                external_port, port_name)
        } else {
            alert("Selecione ao menos um protocolo!");
        }
    } else {
        alert("Informe todas as opções de rede!")
    }
    if (result != undefined) {
        document.querySelector("#result-port").value = result
        resetPort();
    }

}