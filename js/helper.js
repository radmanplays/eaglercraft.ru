function checkVersion() {
    if ($("#Version option:selected").val() == "r1.5") {
        $("#options").append('<p id="client">Client</p><select class="dropdown"id="Clients"onchange="checkClient();"><option value="reg">Vanilla<option value="prcscn">Precision Client<option value="rsnt">Resent Client</select>');
        $("#client2").remove();
        $("#Clients2").remove();
    } else if ($("#Version option:selected").val() == "r1.8") {
        $("#options").append('<p id="client2">Client</p><select class="dropdown"id="Clients2"onchange="checkClient();"><option value="reg">Vanilla<option value="rsnt">Resent Client</select>');
        $("#client").remove();
        $("#Clients").remove();
    } else {
        $("#client").remove();
        $("#Clients").remove();
        $("#client2").remove();
        $("#Clients2").remove();
        $("#pack").remove();
        $("#Packs").remove();
        $("#pack2").remove();
        $("#Packs2").remove();
    }
}

function checkClient() {
    if ($("#Clients option:selected").text() == "Precision Client") {
        $("#options").append('<p id="pack">Texture Pack</p><select class="dropdown"id="Packs"><option value="reg">Vanilla<option value="New">Default New<option value="modnew">Modified New<option value="bombies">Bombies<option value="bones">Bones<option value="miami">Miami Private<option value="nebula">Nebula<option value="rice">Ricefault<option value="tightfault">Tightfault<option value="tightfault">Walifault</select>');
        $("#pack2").remove();
        $("#Packs2").remove();
    } else if ($("#Clients option:selected").text() == "Resent Client") {
        $("#options").append('<p id="pack2">Texture Pack</p><select class="dropdown"id="Packs2"><option value="reg">Vanilla<option value="New">Default New<option value="modnew">Modified New<option value="bombies">Bombies<option value="bones">Bones<option value="miami">Miami Private<option value="nebula">Nebula<option value="rice">Ricefault<option value="tightfault">Tightfault<option value="tightfault">Walifault<option value="117pvp">1.17 PvP<option value="asda">Asda<option value="blue">Blue<option value="dino">Dino<option value="faithful">Faithful<option value="latenci">Latenci<option value="rhedd">Rhedd<option value="toxica">Toxica<option value="venom">Venom<option value="violet">Violet</select>');
        $("#pack").remove();
        $("#Packs").remove();
    } else {
        $("#pack").remove();
        $("#Packs").remove();
        $("#pack2").remove();
        $("#Packs2").remove();
    }
}

function playNow() {
    var head = document.getElementsByTagName('head');
    var newScript = document.createElement('script');
    head[0].appendChild(newScript);

    if ($("#Version option:selected").val() == 'ltst') {
        $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
        location.replace("/mc/1.8.8/");
    }
    if ($("#Version option:selected").val() == 'r1.8') {
        if ($("#Clients2 option:selected").val() == 'reg') {
            $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
            location.replace("/mc/1.8.8/");
        }
        if ($("#Clients2 option:selected").val() == 'rsnt') {
            $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
            location.replace("/mc/1.8.8/rsnt/");
        }
    }
    if ($("#Version option:selected").val() == 'r1.5') {
        if ($("#Clients option:selected").text() == 'Vanilla') {
            $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
            location.replace("/mc/1.5.2/vanilla/");
        }
        if ($("#Clients option:selected").text() == 'Precision Client') {
            if ($("#Packs option:selected").text() == 'Vanilla') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/default.html");
            }
            if ($("#Packs option:selected").text() == 'Default New') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/defaultnew.html");
            }
            if ($("#Packs option:selected").text() == 'Modified New') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/modifiednew.html");
            }
            if ($("#Packs option:selected").text() == 'Bombies') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/bombies.html");
            }
            if ($("#Packs option:selected").text() == 'Bones') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/bones.html");
            }
            if ($("#Packs option:selected").text() == 'Miami Private') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/miamiprivate.html");
            }
            if ($("#Packs option:selected").text() == 'Nebula') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/nebula.html");
            }
            if ($("#Packs option:selected").text() == 'Ricefault') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/ricefault.html");
            }
            if ($("#Packs option:selected").text() == 'Tightfault') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/tightfault.html");
            }
            if ($("#Packs option:selected").text() == 'Walifault') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/prc/walifault.html");
            }
        }
        if ($("#Clients option:selected").text() == 'Resent Client') {
            if ($("#Packs2 option:selected").text() == 'Vanilla') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/default.html");
            }
            if ($("#Packs2 option:selected").text() == 'Default New') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/defaultnew.html");
            }
            if ($("#Packs2 option:selected").text() == 'Modified New') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/modifiednew.html");
            }
            if ($("#Packs2 option:selected").text() == 'Bombies') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/bombies.html");
            }
            if ($("#Packs2 option:selected").text() == 'Bones') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/bones.html");
            }
            if ($("#Packs2 option:selected").text() == 'Miami Private') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/miamiprivate.html");
            }
            if ($("#Packs2 option:selected").text() == 'Nebula') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/nebula.html");
            }
            if ($("#Packs2 option:selected").text() == 'Ricefault') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/ricefault.html");
            }
            if ($("#Packs2 option:selected").text() == 'Tightfault') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/tightfault.html");
            }
            if ($("#Packs2 option:selected").text() == 'Walifault') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/walifault.html");
            }
            if ($("#Packs2 option:selected").text() == '1.17 PvP') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/117pvp.html");
            }
            if ($("#Packs2 option:selected").text() == 'Asda') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/asda.html");
            }
            if ($("#Packs2 option:selected").text() == 'Blue') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/blue.html");
            }
            if ($("#Packs2 option:selected").text() == 'Dino') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/dino.html");
            }
            if ($("#Packs2 option:selected").text() == 'Faithful') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/faithful.html");
            }
            if ($("#Packs2 option:selected").text() == 'Latenci') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/latenci.html");
            }
            if ($("#Packs2 option:selected").text() == 'Rhedd') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/rhedd.html");
            }
            if ($("#Packs2 option:selected").text() == 'Toxica') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/toxica.html");
            }
            if ($("#Packs2 option:selected").text() == 'Venom') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/venom.html");
            }
            if ($("#Packs2 option:selected").text() == 'Violet') {
                $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
                location.replace("/mc/1.5.2/rsnt/violet.html");
            }
        }
    }
    if ($("#Version option:selected").val() == 'beta1.3') {
        $.ajax({url: "https://api.countapi.xyz/hit/eaglercraft.ru/7ab2c8d5-5869-46ff-a0e8-2d22822f8ffe?callback=playCount", dataType: "script", success: ""});
        location.replace("/mc/b1.3/");
    }
}