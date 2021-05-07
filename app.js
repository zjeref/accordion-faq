const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", () => {
    

    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("accordion-active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("accordion-active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("accordion-active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      console.log(accordionItemBody.scrollHeight)
    }
    else {
      accordionItemBody.style.maxHeight = 0;
      console.log(accordionItemBody.scrollHeight)
    }
    
  });
});

const testing = document.querySelector(".logo");

testing.addEventListener("click", () => {
  console.log("working");
})