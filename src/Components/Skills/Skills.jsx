import React from 'react'
import Design from "./Skills.module.css"
import JavaPopup from '../../PopUps/JavaPopup/JavaPopup'
import ReactPopup from '../../PopUps/ReactPopup/ReactPopup'
import NodePopup from '../../PopUps/NodePopup/NodePopup'
import HtmlPopup from '../../PopUps/HtmlPopup/HtmlPopup'
import CssPopup from '../../PopUps/CssPopup/CssPopup'

import JsPopup from "../../PopUps/JsPopup/JsPopup"
import ExpressPopup from '../../PopUps/ExpressPopup/ExpressPopup'
import MongoPopup from "../../PopUps/MongoPopup/MongoPopup"
import TailPopup from "../../PopUps/TailPopup/TailPopup"



const Skills = () => {

  const [openJava, setOpenJava] = React.useState(false);
  const [openReact, setOpenReact] = React.useState(false);
  const [openNode, setOpenNode] = React.useState(false);
  const [openHtml, setOpenHtml] = React.useState(false);
  const [openCss, setOpenCss] = React.useState(false);
  const [openJs, setOpenJs] = React.useState(false);
  const [openExpress, setOpenExpress] = React.useState(false);
  const [openMongo, setOpenMongo] = React.useState(false);
  const [openTail, setOpenTail] = React.useState(false);


  const handleOpenJava = ()=>{
    
    setOpenJava(true)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenReact = ()=>{
    
    setOpenJava(false)
    setOpenReact(true)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenNode = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(true)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenHtml = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(true)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenCss = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(true)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenJs = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(true)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenExpress = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(true)
    setOpenMongo(false)
    setOpenTail(false)
  }

  const handleOpenMongo = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(true)
    setOpenTail(false)
  }

  const handleOpenTail = ()=>{
    
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(true)
  }





  const handleClose = () => {
    setOpenJava(false)
    setOpenReact(false)
    setOpenNode(false)
    setOpenHtml(false)
    setOpenCss(false)
    setOpenJs(false)
    setOpenExpress(false)
    setOpenMongo(false)
    setOpenTail(false)
  }

  return (
    <div id='skills' className={Design.skills}>
        <h1>Skills</h1>
        
        <div className={Design.icons}>

        <div  className={Design.icondiv} >
          <svg onClick={handleOpenJava} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
          </svg>          
          <p>Java</p>
        </div>

        
        <div  className={Design.icondiv}>
          <svg onClick={handleOpenReact}
            xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="react"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g></svg>
          <p>React JS</p>
        </div>

        <div className={Design.icondiv}>
          <svg onClick={handleOpenNode} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="node-js"><path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path></svg>
          <p>Node JS</p>
        </div>

        <div className={Design.icondiv}>
          <svg onClick={handleOpenHtml} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="html"><polygon fill="#E44D26" points="3.345 21.601 1.419 0 22.581 0 20.653 21.598 11.987 24 3.345 21.601"></polygon><polygon fill="#F16529" points="12 22.164 19.002 20.222 20.65 1.766 12 1.766"></polygon><path fill="#EBEBEB" d="M12,9.778H8.495L8.252,7.065H12v-2.65H5.357l0.063,0.711l0.651,7.3H12V9.778L12,9.778z M12,16.658l-0.012,0.003l-2.95-0.797l-0.189-2.113H6.19l0.371,4.16l5.427,1.507L12,19.414V16.658L12,16.658z"></path><path fill="#FFF" d="M11.991,9.778v2.649h3.263l-0.308,3.436l-2.955,0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991,9.778z M11.991,4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991,4.415z"></path><polygon fill="#DEDEDE" points="12 23.996 11.987 24 12 24 12 23.996"></polygon><path fill="#C64321" d="M12,7.065L12,7.065H8.252l0.242,2.713h3.496H12V7.065L12,7.065z M12,0H1.419l1.926,21.601L11.987,24L12,23.996v-4.582v0l-0.012,0.004l-5.427-1.507l-0.371-4.16h2.659l0.189,2.113l2.95,0.797l0.003-0.001v0L12,16.658v-4.231H6.071l-0.651-7.3L5.357,4.415h6.634H12V0L12,0z"></path><path fill="#CDCDCD" d="M8.849,13.751H6.19l0.371,4.16l5.427,1.507L12,19.414v0l-0.009,0.002v-2.756l-0.003,0.001l-2.95-0.797L8.849,13.751L8.849,13.751z M11.991,4.415H5.357l0.063,0.711l0.651,7.3H12h-0.009V9.778H8.495L8.252,7.065H12h-0.009V4.415L11.991,4.415z"></path><path fill="#DEDEDE" d="M12,16.658l-0.009,0.002v0v2.756L12,19.414V16.658L12,16.658z M12,9.778h-0.009v2.649H12V9.778L12,9.778z M12,4.415h-0.009v2.65H12V4.415L12,4.415z"></path></svg>
          <p>HTML</p>
        </div>

        <div className={Design.icondiv}>
          <svg onClick={handleOpenCss} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="css"><path fill="#2196F3" d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path><path fill="#FAFAFA" d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"></path></svg>

          <p>CSS</p>
        </div>

        <div className={Design.icondiv}>
          <svg onClick={handleOpenJs} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 256" id="javascript"><path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></svg>        
          <p>JavaScript</p>
        
        </div>

        
        
        <div className={Design.icondiv}>
          <svg onClick={handleOpenExpress} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="express"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"></path></svg>
          <p>Express JS</p>
        </div>

        <div className={Design.icondiv}>
          <svg onClick={handleOpenMongo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mongodb"><path fill="#FFF" d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path><path fill="#A6A385" d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path><path fill="#FFF" d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path><path fill="#499D4A" d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path><path fill="#FFF" d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path><path fill="#58AA50" d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path></svg>
          <p>MongoDb</p>
        </div>
        

        <div className={Design.icondiv}>
          <svg onClick={handleOpenTail} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
          </svg>          
          <p>Tailwind CSS</p>
        </div>

        


        </div>

        {openJava && <JavaPopup handleClose={handleClose}  />}
        {openReact && <ReactPopup handleClose={handleClose}  />}
        {openNode && <NodePopup handleClose={handleClose} />}
        {openHtml && <HtmlPopup handleClose={handleClose} />}
        {openCss && <CssPopup handleClose={handleClose} />}
        
        {openJs && <JsPopup handleClose={handleClose} /> }
        {openExpress && <ExpressPopup handleClose={handleClose}  />}
        {openMongo && <MongoPopup handleClose={handleClose}  />}
        {openTail && <TailPopup handleClose={handleClose}  />}

    </div>
  )
}

export default Skills