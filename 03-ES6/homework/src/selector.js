var traverseDomAndCollectElements = function(matchFunc, startEl) {
   var resultSet = [];

   if (typeof startEl === "undefined") {
      startEl = document.body;
   }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
   if (matchFunc(startEl)) {
      resultSet.push(startEl);
   }

   for (const elem of startEl.children) {
      let elementos = traverseDomAndCollectElements(matchFunc, elem);
      resultSet = [...resultSet, ...elementos];
   }

   return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
   if (selector[0] === "#") {
      return "id";
   } else if (selector[0] === ".") {
      return "class";
   } else if ((/[.#]/.test(selector))) {
      return "tag.class";
   } else {
      return "tag";
   }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
   var selectorType = selectorTypeMatcher(selector);
   var matchFunction;
   if (selectorType === "id") { 
      matchFunction = function(el) {
         return "#" + el.id === selector;
      }
   } else if (selectorType === "class") {
      matchFunction = function(el) {
         let clases = el.classList
         for (const pos of clases) {
            if ("." + pos === selector) return true;
         } return false;
      }
   } else if (selectorType === "tag.class") {
      matchFunction = function(el) {
         let [tagX, classX] = selector.split(".");
         return matchFunctionMaker(tagX)(el) && matchFunctionMaker("." + classX)(el);
      }
   } else if (selectorType === "tag") {
      matchFunction = function(el) {
         return el.tagName.toLowerCase() === selector;
      }
   }
   return matchFunction;
};

var $ = function(selector) {
   var elements;
   var selectorMatchFunc = matchFunctionMaker(selector);
   elements = traverseDomAndCollectElements(selectorMatchFunc);
   return elements;
};
