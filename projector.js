function closeSection() {
  document.getElementById('product-section').style.display = 'none';
  document.documentElement.classList.remove("no-scroll");
  document.getElementById('img2').style.display = 'flex';
  document.getElementById('img3').style.display = 'flex';
  document.getElementById('img4').style.display = 'flex';
  document.getElementById('img5').style.display = 'flex';
  restoreScrollPosition(); // Restore the scroll position
}



function changeImg(id){
  let Imgsrc = document.getElementById(id).src;
  document.getElementById('main-image').src = Imgsrc;
  return false;
} 

function projector1(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '70%';
  document.getElementById('main-image').src = './image/Home_theatre/projector/epson_ tw_7100.1.png';
  document.getElementById('img1').style.width = '120px';
  document.getElementById('img2').style.width = '120px';
  document.getElementById('img3').style.width = '120px';
  document.getElementById('img4').style.width = '120px';
  document.getElementById('img1').src = './image/Home_theatre/projector/epson_ tw_7100.1.png';
  document.getElementById('img2').src = './image/Home_theatre/projector/epson_ tw_7100.2.png';
  document.getElementById('img3').src = './image/Home_theatre/projector/epson_ tw_7100.3.png';
  document.getElementById('img4').src = './image/Home_theatre/projector/epson_ tw_7100.4.png';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').innerHTML = 'EPSON TW 7100';
  document.getElementById('price').innerHTML = '₹ 1,52,999';
  document.getElementById('detail').innerHTML = '<ul><li>4K PRO-UHD<sup>1</sup>&nbsp;for crisp, clear images: Watch native 4K and upscale non-4K content</li><li>Easy to set up and access content: Stream content by plugging devices into either of the two HDMI ports</li><li>High-quality and affordable: Flexible features that deliver a 4K experience at an affordable price</li><li>Engaging big screen experience: Get the best out of movies, sports and gaming</li><li>Watch a movie a day for seven years<sup>2</sup>: 5,000 hours lamp life in Eco mode</li></ul>'
  }

function projector2(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '60%';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('main-image').src = './image/Home_theatre/projector/epson_e01.1.png';
  document.getElementById('img1').src = './image/Home_theatre/projector/epson_e01.1.png';
  document.getElementById('img2').src = './image/Home_theatre/projector/epson_e01.2.png';
  document.getElementById('img3').src = './image/Home_theatre/projector/epson_e01.3.png';
  document.getElementById('img4').src = './image/Home_theatre/projector/epson_e01.4.png';
  document.getElementById('img5').src = './image/Home_theatre/projector/epson_e01.5.png';
  document.getElementById('name').innerHTML = 'EPSON EB 01';
  document.getElementById('price').innerHTML = '₹ 10,00,000';
  document.getElementById('detail').innerHTML = '<ul><li><span style="color: #303030;">3LCD technology for equal white &amp; colour light output</span></li><li><span style="color: #303030;">Native XGA resolution and 4:3 performance</span></li><li><span style="color: #303030;">Long lamp life up to 12,000 hours*<sup>2</sup> in ECO mode</span></li><li><span style="color: #303030;">Easy setup and positioning flexibility</span></li><li><span style="color: #303030;">HDMI connectivity</span></li></ul>';
}

function projector3(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '70%';
  document.getElementById('main-image').src = './image/Home_theatre/projector/epson_fh06.1.png';
  document.getElementById('img1').style.width = '140px';
  document.getElementById('img2').style.width = '140px';
  document.getElementById('img3').style.width = '140px';
  document.getElementById('img1').src = './image/Home_theatre/projector/epson_fh06.1.png';
  document.getElementById('img2').src = './image/Home_theatre/projector/epson_fh06.2.png';
  document.getElementById('img3').src = './image/Home_theatre/projector/epson_fh06.3.png';
  document.getElementById('img4').style.display = 'none';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').style.marginTop = '30px';
  document.getElementById('name').innerHTML = 'EPSON FH 06';
  document.getElementById('price').innerHTML = '₹ 77,804';
  document.getElementById('detail').innerHTML = '<ul><li>White and Colour Brightness at 3,500lm</li><li>843cm&nbsp;big screen experience</li><li>12,000 lamp life in eco-mode</li><li><span style="text-indent: -0.25in;">Full HD 1080p resolution</span></li><li><span style="text-indent: -0.25in;">Horizontal Keystone Slider</span></li></ul>';
}

function projector4(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '60%';
  document.getElementById('main-image').src = './image/Home_theatre/projector/epson_tw_6250.2.png';
  document.getElementById('img1').style.width = '120px';
  document.getElementById('img2').style.width = '120px';
  document.getElementById('img3').style.width = '120px';
  document.getElementById('img4').style.width = '120px';
  document.getElementById('img5').style.width = '120px';
  document.getElementById('img1').src = './image/Home_theatre/projector/epson_tw_6250.2.png';
  document.getElementById('img2').src = './image/Home_theatre/projector/epson_tw_6250.1.png';
  document.getElementById('img3').src = './image/Home_theatre/projector/epson_tw_6250.3.png';
  document.getElementById('img4').src = './image/Home_theatre/projector/epson_tw_6250.4.png';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').innerHTML = 'EPSON TW 6250';
  document.getElementById('price').innerHTML = '₹ 1,40,299';
  document.getElementById('detail').innerHTML = '<ul><li>Stunning 4K PRO-UHD&nbsp;visuals<sup>*1</sup></li><li>Smooth, clear images </li><li>Built-in Android TV <sup>TM</sup></li><li>Vertical lens shift </li><li>2,800 lumens of colour and white brightness<sup>*2</sup></li></ul>';
}

function projector5(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '60%';
  document.getElementById('main-image').src = './image/Home_theatre/projector/epson_tw_750.1.png';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('img1').src = './image/Home_theatre/projector/epson_tw_750.1.png';
  document.getElementById('img2').src = './image/Home_theatre/projector/epson_tw_750.2.png';
  document.getElementById('img3').src = './image/Home_theatre/projector/epson_tw_750.3.png';
  document.getElementById('img4').src = './image/Home_theatre/projector/epson_tw_750.4.png';
  document.getElementById('img5').src = './image/Home_theatre/projector/epson_tw_750.5.png';
  document.getElementById('name').innerHTML = 'EPSON TW 750';
  document.getElementById('price').innerHTML = '₹ 80,099';
  document.getElementById('detail').innerHTML = '<ul><li>12,000 Hours Lamp-life<sup>*1</sup></li><li>White and Colour Brightness at3,400 lm<sup>*2</sup></li><li>Full HD resolution (1080p)</li><li>16,000:1 Contrast Ratio</li><li>Split-Screen Function</li></ul>';
}

function projector6(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '60%';
  document.getElementById('main-image').src = './image/Home_theatre/projector/epson_tw_9400.1.png';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('img1').src = './image/Home_theatre/projector/epson_tw_9400.1.png';
  document.getElementById('img2').src = './image/Home_theatre/projector/epson_tw_9400.2.png';
  document.getElementById('img3').src = './image/Home_theatre/projector/epson_tw_9400.3.png';
  document.getElementById('img4').src = './image/Home_theatre/projector/epson_tw_9400.4.png';
  document.getElementById('img5').src = './image/Home_theatre/projector/epson_tw_9400.5.png';
  document.getElementById('name').innerHTML = 'EPSON TW 9400';
  document.getElementById('price').innerHTML = '₹ 2,45,799';
  document.getElementById('detail').innerHTML = '<ul>	<li>4K PRO-UHD Resolution</li><li>White and Colour Brightness at 2,600 lumens</li><li>Flexible Installation with Optical Lens Shift</li><li>Impressive 3D Image Quality</li><li>Wide-range Connectivity</li><li>Enhanced HDR Function<br>&nbsp;</li></ul>';
}

function speaker1(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '80%';
  document.getElementById('main-image').src = './image/Home_theatre/sound_system/t101.1.png';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('img1').src = './image/Home_theatre/sound_system/t101.1.png';
  document.getElementById('img2').src = './image/Home_theatre/sound_system/t101.2.png';
  document.getElementById('img3').src = './image/Home_theatre/sound_system/t101.3.png';
  document.getElementById('img4').style.display = 'none';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').innerHTML = 'KEF T101';
  document.getElementById('price').innerHTML = '₹ 18,000/Unit';
  document.getElementById('detail').innerHTML = '<ul><li>Frequency response : 80Hz – 30kHz</li><li>Power : 100W</li><li>Sensitivity : 90dB</li><li>Impedance : 8Ω</li><li>Driver Size : 115 mm MF, 25 mm HF</li><li>Dimensions (HxWxD) : T 101 - 330 x 140 x 35 mm</li> <li>Weight : 1k</li></ul>';
}

function speaker2(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '70%';
  document.getElementById('main-image').src = './image/Home_theatre/sound_system/t301.1.png';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('img1').src = './image/Home_theatre/sound_system/t301.1.png';
  document.getElementById('img2').src = './image/Home_theatre/sound_system/t301.2.png';
  document.getElementById('img3').src = './image/Home_theatre/sound_system/t301.3.png';
  document.getElementById('img4').style.display = 'none';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').innerHTML = 'KEF T301';
  document.getElementById('price').innerHTML = '₹ 29,000/Unit';
  document.getElementById('detail').innerHTML = '<ul><li>Frequency response : 80Hz – 30kHz</li><li>Power : 150W</li><li>Sensitivity : 91dB</li><li>Impedance : 8Ω</li><li>Driver Size : 2 x 115 mm Mf, 25 mm LF</li><li>Dimensions (HxWxD) : T 301 - 600 x 140 x 35 mm</li> <li>Weight : 1.5kg</li><li>T2 Sub woofer</li></ul>';
}

function speaker3(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '80%';
  document.getElementById('main-image').src = './image/Home_theatre/sound_system/t101c.png';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('img1').src = './image/Home_theatre/sound_system/t101c.png';
  document.getElementById('img2').style.display = 'none';
  document.getElementById('img3').style.display = 'none';
  document.getElementById('img4').style.display = 'none';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').innerHTML = 'KEF T101C';
  document.getElementById('price').innerHTML = '₹ 18,000/Unit';
  document.getElementById('detail').innerHTML = '<ul><li>Frequency response : 80Hz – 30kHz</li><li>Power : 100W</li><li>Sensitivity : 90dB</li><li>Impedance : 8Ω</li><li>Driver Size : 115 mm MF, 25 mm HF</li><li>Dimensions (HxWxD) : T 101 - 140 x 330 x 35 mm</li> <li>Weight : 1k</li></ul>';
}

function speaker4(){
  document.documentElement.classList.add("no-scroll");
  document.getElementById('product-section').style.display = 'flex';
  document.getElementById('sub-images').style.width = '60%';
  document.getElementById('main-image').src = './image/Home_theatre/sound_system/t301c.1.png';
  document.getElementById('img1').style.width = '100px';
  document.getElementById('img2').style.width = '100px';
  document.getElementById('img3').style.width = '100px';
  document.getElementById('img4').style.width = '100px';
  document.getElementById('img5').style.width = '100px';
  document.getElementById('img1').src = './image/Home_theatre/sound_system/t301c.1.png';
  document.getElementById('img2').src = './image/Home_theatre/sound_system/t301c.2.png';
  document.getElementById('img3').style.display = 'none';
  document.getElementById('img4').style.display = 'none';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('name').innerHTML = 'KEF T301C';
  document.getElementById('price').innerHTML = '₹ 29,000/Unit';
  document.getElementById('detail').innerHTML = '<ul><li>Frequency response : 80Hz – 30kHz</li><li>Power : 150W</li><li>Sensitivity : 91dB</li><li>Impedance : 8Ω</li><li>Driver Size : 2 x 115 mm Mf, 25 mm LF</li><li>Dimensions (HxWxD) : T 301 - 140 x 600 x 35 mm</li> <li>Weight : 1.5kg</li><li>T2 Sub woofer</li></ul>';
}

function callProjector1(event) {
  event.preventDefault(); 
  projector1(); 
}

function callProjector2(event) {
  event.preventDefault(); 
  projector2(); 
}

function callProjector3(event) {
  event.preventDefault(); 
  projector3(); 
}

function callProjector4(event) {
  event.preventDefault(); 
  projector4(); 
}

function callProjector5(event) {
  event.preventDefault(); 
  projector5(); 
}

function callProjector6(event) {
  event.preventDefault(); 
  projector6(); 
}

function callSpeaker1(event){
  event.preventDefault();
  speaker1();
}

function callSpeaker2(event){
  event.preventDefault();
  speaker2();
}

function callSpeaker3(event){
  event.preventDefault();
  speaker3();
}

function callSpeaker4(event){
  event.preventDefault();
  speaker4();
}