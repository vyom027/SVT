
function swapImage(imgId) {
    var smallImgSrc = document.getElementById(imgId).src;
    var mainImgSrc = document.getElementById("mainimg").src;
    document.getElementById("mainimg").src = smallImgSrc;
    document.getElementById(imgId).src = mainImgSrc;
    return false;
}
function cls() {
    document.getElementById("pro").style.display = "none";
    document.documentElement.classList.remove("no-scroll"); // Restore scrolling on the entire screen
}

function cctv1() {
    let pname = "Dahua HAC-T1A21P";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/dahua/dahua1.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/dahua/dahua1.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/dahua/dahua1.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 1,200";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li> Warranty Period:Not Applicable</li><li>Item Condition:New</li><li> Model:20200145</li><li> Country of Origin:China</li><li> Package Quantity:1</li></ul>";
}

function cctv2() {
    let pname = "CP Plus HDCVI IR";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/dahua/dahua2.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/dahua/dahua2.2.jpg";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/dahua/dahua2.3.png";
    document.getElementById("smimg3").src = "./image/Home_Automation_Security/cctv/dahua/dahua2.4.png";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 3,500";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>The parameters and datasheets below can only be applied to 1000-S3 series</li><li>Max 30fps@720P</li><li> HD and SD output switchable</li><li> 3.6mm fixed lens (2.8mm optional)</li><li> Max. IR length 20m, Smart IR</li></ul>";
}

function cctv3() {
    let pname = "Dahua HAC HFW1509TLM";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/dahua/dahua3.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/dahua/dahua3.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/dahua/dahua3.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 2,600";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li> Max 25 fps@5MP (16:9 video output)</li><lo>120 dB true WDR, 3D NR</li><li> 24/7 color imaging</li> <li>20 m illumination distance</li><li> Built-in mic (-A) , 3.6 mm fixed lens (2.8 mm optional) , IP67</li> <li>12 V DCMounting Type: Embedded</li></ul>";
}

function cctv4() {
    let pname = "Dahua 2MP IP Bullet";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/dahua/dahua4.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/dahua/dahua4.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/dahua/dahua4.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 2,800";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>2MP, 1/2.7” CMOS image sensor, low illuminance, high image definition</li><li>Outputs max. 2MP (1920 × 1080) @25/30 fps</li><li>H.265 codec, high compression rate, ultra-low bit rate, Built-in LEDs, max LED distance: 15 m</li><li> ROI, SMART H.264/H.265, flexible coding,12V DC/PoE power support</li></ul>";
}

function cctv5() {
    let pname = "Hikvision HD-TVI Camera";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision1.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision1.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision1.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 1,350";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>1.0 Megapixel CMOS image sensor</li><li>Sharp images, up to 720p resolution</li><li>Long range infrared: 20m</li><li>IP66 waterproof</li><li >Lens: 3.6mm (2.8mm, 6mm optional)</li><li>Power supply : VDC12±15%</li><li >Size: 70×149.5 mm (2.76' 5.89')</li><li >Weight: 400 g</li></ul>";
}

function cctv6() {
    let pname = "Hikvision DS-2CE76H0T-ITPF";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision2.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision2.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision2.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 7,000";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li> High quality imaging with 2 MP, 1920×1080 resolution</li><li>2.8 mm, 3.6 mm fixed focal lens</li><li>Up to 20 m IR distance for bright night imaging</li><li>Up to 20 m white light distance for bright night imaging</li><li>High quality audio with audio over coaxial cable, built-in mic</li><li>One port for four switchable signals (TVI/AHD/CVI/CVBS)</li></ul>";
}

function cctv7() {
    let pname = "Hikvision DS-2CE5AD0T-IP";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision3.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision3.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision3.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 1,500";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>Hikvision DS-2CE5AD0T-IP/ECO (3.6mm) 2MP (1080P)</li><li> 2.0 Megapixel High-performance CMOS, Analog HD output</li><li> up to 1080P resolution, True Day/Night, Smart IR</li><li> Up to 20m IRdistance, OSD Menu</li><li>Effective Pixels - 1296 (H) x 732 (V)</li></ul>";
}

function cctv8() {
    let pname = "HIKVISION 1080p HD";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision4.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision4.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/hikvision/Hikvision4.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 1,800";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>5 MP full time color turret camera.</li> <li>24/7 full color imaging</li><li> 2.8 mm fixed focal lens. Warm supplemental light with 20 m range. </li><li>Clear imaging even against strong back lighting due to 130 dB true WDR technology</li><li> 3D DNR technology delivers clean and sharp images</li><li> Water and dust resistant (IP67)</li></ul>";
}

function cctv9() {
    let pname = "2MP IR Dome Camera ";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/secureye/Secureye1.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/secureye/Secureye1.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/secureye/Secureye1.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 1,500";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>1080,1/2.9″ CMOS Sensor</li><li>AHD / TVI / CVI / CVBS Output</li><li>3.6mm Fixed Lens</li><li>Housing Material: Plastic</li><li>Support UTC</li><li>Support DWDR</li><li>With DIP Switch</li></ul>";
}

function cctv10() {
    let pname = "SF40 Security camera";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/secureye/Secureye2.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/secureye/Secureye2.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/secureye/Secureye2.3.png";
    document.getElementById("smimg3").src = "./image/Home_Automation_Security/cctv/secureye/Secureye2.4.png";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 3,200";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>Brand: SecureyeMax</li><li> Image Resolution: 1080P</li><li>Audio Compression: G711ACamera</li><li> Lens: 3.6mm</li><li>IR: 4pcs IR LEDIR</li><li> Distance: 10M</ul>";
}

function cctv11() {
    let pname = "Smart WIFI 2MP PAN TILT CAMERA";
    document.getElementById("pro").style.display = "flex";
    document.documentElement.classList.add("no-scroll"); 
    document.getElementById("mainimg").src = "./image/Home_Automation_Security/cctv/secureye/Secureye3.1.png";
    document.getElementById("smimg1").src = "./image/Home_Automation_Security/cctv/secureye/Secureye3.2.png";
    document.getElementById("smimg2").src = "./image/Home_Automation_Security/cctv/secureye/Secureye3.3.png";
    document.getElementById("smimg3").style.display = "none";
    document.getElementById("product-title").innerHTML = pname;
    document.getElementById("price").innerHTML = "₹ 3,800";
    document.getElementById("product-detail-p1").innerHTML = "";
    document.getElementById("product-detail-p2").innerHTML = "<ul><li>1080P Full HD video quality, live stream and watch recordings</li><li>Support Intelligent Auto- Tracking</li><li>Wide viewing angle, see more of every momentSupport WiFi 2.4GHz</li><li>Support local storage by MicroSD card up to 128GB</li><li>Support 2-way audio between phone and camera</li></ul>";
}

