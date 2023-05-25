export function firstUp(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function firstDown(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function replaceSpace(str) {
  return str.replace(/\s/gi, "_");
}

export function toPageName(str) {
  return str.replace(/_/gi, " ");
}

export function cloneArray(arr) {
  return arr.slice(0, arr.length);
}

export function htmlencode(str) {
  return str.replace(/[&<>"']/g, function ($0) {
    return (
      "&" +
      { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] +
      ";"
    );
  });
}

export function htmldecode(str) {
  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, function ($0) {
    return {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    }[$0];
  });
}

export function addSlashes(str) {
  return str.replace(/[\*\(\)\[\]+]/g, function ($0) {
    return {
      "*": "\\*",
      "(": "\\(",
      ")": "\\)",
      "[": "\\[",
      "]": "\\]",
      "+": "\\+",
    }[$0];
  });
}

export function clearTimeStamp(str) {
  var imgPattern = new RegExp("\\?t=[0-9]*", "i");
  if (imgPattern.test(str)) str = str.replace(imgPattern, "");
  return str;
}

export function simulateCssEvent(type, path, doc) {
  doc = doc || document;
  var id = "simulatedStyle";

  var generateEvent = function (selector) {
    var style = "";
    $.get(path, function (data) {
      var regex = new RegExp(selector, "g");
      var text = data.replace(regex, ".spr-hover");
      text = text.replace(/@import[^\n]*/g, "");
      style += text + "\n";
      $(doc)
        .find("head")
        .append("<style id=" + id + ">" + style + "</style>");
    });
  };

  var stopEvent = function () {
    $(doc)
      .find("#" + id)
      .remove();
  };

  switch (type) {
    case "hover":
      return generateEvent(":hover");
    case "stop":
      return stopEvent();
  }
}

export function getDomPath(el) {
  var stack = [];
  while (el.parentNode != null && !el.classList.contains("section-item")) {
    var sibCount = 0;
    var sibIndex = 0;
    if (!el.classList.contains("buttons-control")) {
      var elBase = el;
      if (el.parentElement.classList.contains("buttons-control")) {
        elBase = el.parentElement;
      }
      for (var i = 0; i < elBase.parentNode.childNodes.length; i++) {
        var sib = elBase.parentNode.childNodes[i];
        if (sib.nodeName == elBase.nodeName) {
          if (sib === elBase) {
            sibIndex = sibCount;
          }
          sibCount++;
        }
      }
      if (el.hasAttribute("id") && el.id != "") {
        stack.unshift(el.nodeName.toLowerCase() + "#" + el.id);
      } else if (sibCount > 1) {
        stack.unshift(
          el.nodeName.toLowerCase() + ":nth-child(" + (sibIndex + 1) + ")"
        );
      } else {
        stack.unshift(el.nodeName.toLowerCase());
      }
    }
    el = el.parentNode;
  }

  return stack.join(" > ");
}
