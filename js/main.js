'use strict'

document.addEventListener('DOMContentLoaded', function(){
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function(e){
        const radius = cursor.offsetHeight / 2;
        let top = e.clientY - radius,
            left = e.clientX - radius;
        cursor.style = `top: ${top}px; left: ${left}px`;
    })

    const hoverElms = document.querySelectorAll('.hover-elm');
        hoverElms.forEach((hoverElm) => {
            hoverElm.addEventListener('mouseover', () => {
                cursor.classList.add('active');
            })
            hoverElm.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            })
        })

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.addEventListener('mousemove', function(event){
            const mainContent = section.querySelectorAll('.parallax');
            mainContent.forEach((item) => {
                let speed = item.getAttribute('data-speed');
                item.style.transform = `translate(${(event.clientX * speed) / 1000}px, ${(event.clientY * speed) / 1000}px)`;
            })
        })
        section.addEventListener('click', function(e){
            let button = section.querySelector('.js-button');
            if(e.target === button){
                section.classList.toggle('active')
            }
        })
    })

    const workItems = document.querySelectorAll('.work_content_body_item');

    workItems.forEach((workItem) =>{
        workItem.addEventListener('mousemove', function(e){
            let itemHeight = workItem.offsetHeight / 2;
            let itemWidth = workItem.offsetWidth / 2;

            workItem.style.transform = `rotateX(${(e.offsetY - itemHeight) / 20}deg) rotateY(${(e.offsetX - itemWidth) / 20}deg)`;
        })
        workItem.addEventListener('mouseleave', ()=>{
            workItem.style.transform = `rotate(0)`
        })
    })    
})
















// document.addEventListener('DOMContentLoaded', function(){

//     let sections = document.querySelectorAll('.section');
//     sections.forEach(function(section){

//         section.addEventListener('click', function(event) {
//             let button = section.querySelector('.button img');
//             if(event.target == button){
//                 section.classList.toggle('active');
//             }
//         })
//     })

//     //паралакс для фотографии
//     const about = document.querySelector('.about');
//     about.addEventListener('mousemove', function(e){
//         let layers = about.querySelectorAll('.layer');

//         layers.forEach(function(layer){
//             let speed = layer.getAttribute('data-speed');

//             layer.style.transform = `translate(-${e.clientX * speed / 2000}px, -${e.clientY * speed / 2000}px)`;
//         })
//     })

//     //вызов модального окна
//     let modalButton = document.querySelector('.about_content_description_item button');
//     let modalFactsOverlay = document.querySelector('.modalFacts');

//     modalButton.addEventListener('click', function(e){
//         e.preventDefault();
//         modalFactsOverlay.classList.add('active');
//     })
//     modalFactsOverlay.addEventListener('click', function(e){
//         if(e.target == modalFactsOverlay){
//             modalFactsOverlay.classList.remove('active');
//         }
//     })

//     // let cardItem = document.querySelector('.skill_content_body_cards_item');

//     // cardItem.addEventListener('mousemove', function(event){
//     //     let halfHeight = cardItem.offsetHeight / 2;
//     //     let halfWidth = cardItem.offsetWidth / 2;
//     //     cardItem.style.transform = `rotateY(-${(event.offsetX - halfWidth) / 5}deg)`
//     // })

// })



// const sections = document.querySelectorAll('.section');

// if(sections.length > 0){
//     sections.forEach(section => {
//         window.addEventListener('scroll', function(e){
//             let sectionOffset = section.offsetLeft;
//             let sectionWidth = section.clientWidth;
            
//             if(window.scrollX >= sectionOffset){
//                 section.classList.add('active')
//             }
            
//         })
//     });
    
// }