function closeSection() {
    document.getElementById('product-container').style.display = 'none';
    document.documentElement.classList.remove("no-scroll");
    document.getElementById('img2').style.display = 'flex';
    document.getElementById('img1').style.width = '100px';
    document.getElementById('img2').style.width = '100px';
    document.getElementById('img3').style.display = 'flex';
    document.getElementById('img4').style.display = 'flex';
    restoreScrollPosition(); // Restore the scroll position
}

function changeImg(id){
    let Imgsrc = document.getElementById(id).src;
    document.getElementById('main-image').src = Imgsrc;
    return false;
}

function mixer1(event){
    event.preventDefault(); 
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Air 4';
    document.getElementById('price').innerText = '₹ 10,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/air4_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/air4_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/air4_2.png';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>4 Mic / Line + 2 Stereo Line Inputs</li><li>3 Band EQ per channel</li><li>Rotary control knobs per channel</li><li>Delay EFX on board & FX send per channel</li><li>Dual 10 Segment L/R LED meter for master level</li><li>Stereo RCA CD In & Out with Control</li><li>L/R Pan Pot & Clip LED per Channel</li><li>Headphone output with control</li><li>Balanced ¼” Jack Master outputs.</li>';
}

function mixer2(event){
    event.preventDefault(); 
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Air 18U';
    document.getElementById('price').innerText = '₹ 30,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/air18u_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/air18u_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/air18u_2.png';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>18 Mic / Line with high quality USB MP3 Player, Recorder and Bluetooth on board.</li><li>1 Aux send. PFL (Cue) switch with individual channel control.</li><li>Stereo RCA input with control.</li><li>Balanced XLR and 1⁄4” jack master output.</li><li>LED display to show track information with transport controls.</li><li>Delay EFX onboard with send per channel.</li><li>3-band EQ per channel. L/R pan pot and clip LED per channel.</li><li>Headphone output with level control.</li><li>USB audio interface with plug & play connectivity for recording and playback using a PC.</li><li>60mm long faders.</li>';
}

function mixer3(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Mini 6';
    document.getElementById('price').innerText = '₹ 4,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/mini6_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/mini6_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/mini6_2.png';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Has 4 mic/line + 1 stereo input</li><li>Gain control with 2-band EQ per channel. Built-in echo/delay processor with unique E-delay</li><li>Clip LED indication per channel. Signal and clip LED indication for master level. 1/4 TS unbalanced L/R main output.</li><li>1 Mixer with 4 mic/line input, 1 stereo input and, User manual and AC cable</li>';
}

function mixer4(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Mini 8';
    document.getElementById('price').innerText = '₹ 6,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/mini8_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/mini8_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/mini8_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mixer/mini8_3.png';
    document.getElementById('img4').src = './image/PA_sound_system/mixer/mini8_4.png';
    document.getElementById('features').innerHTML = '<li>Gain control with 2-band EQ per channel.</li> <li>Built-in echo/delay processor with unique E-delay.</li><li>Clip LED indication per channel.</li><li>Signal & clip LED indication for master level.</li><li>1/4” TS unbalanced L/R main output.</li>';
}

function mixer5(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Mini 12';
    document.getElementById('price').innerText = '₹ 11,250';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/mini12_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/mini12_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/mini12_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mixer/mini12_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Gain control with 3-band EQ per channel</li><li>Clip LED indication per channel.</li><li>1/4” TS unbalanced L/R main output.</li><li>Built-in echo/delay processor with unique E-delay.</li><li>Signal & clip LED indication for master level.</li>';
}

function mixer6(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'ORB 1222';
    document.getElementById('price').innerText = '₹ 30,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/orb1222_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/orb1222_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/orb1222_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mixer/orb1222_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional audio mixing consoles with 12 mic / 14 line inputs.</li><li>MON:Ster (mono-stereo) inputs for full flexibility.</li><li>One Knob Compressor on channels 1-5.</li><li>Ultra low-noise preamps with wide headroom and dynamic range.</li><li>Dual multi-EFX processor with 24 DSP presets and editable parameters.</li><li>Provisions to route EFX to monitor via Aux 1 and Aux 2.</li><li>Built-in USB MP3 media player and recorder with Bluetooth.</li><li>Level control, 2-band EQ with internal/external media input selection.</li><li>75Hz low cut on mono channels.</li><li>4-band EQ on all inputs.</li><li>5 Aux sends – Aux 1-3 (with pre/post selection) and Aux 4-5 (post only).</li><li>Stereo AUX returns.</li><li>Balanced XLR and ¼” jack main outputs.</li><li>2 sub groups with individual ¼” outputs.</li><li>Insert (send/return) on first 4 mono channels and main output.</li><li>Mute, solo, group (G1-G2) and main (L-R) routing per channel.</li><li>Peak, comp, mute and solo LEDs per channel.</li><li>Stereo RCA input and record output.</li><li>Headphone output with level control.</li><li>Globally switched +48V Phantom power supply.</li><li>Responsive 60mm faders.</li><li>7-band stereo graphic equalizer on main output.</li><li>Dual 10-segment LED meter for main, group and solo outputs.</li><li>Ergonomic angled-design for better visibility.</li><li>Clutter-free rear panel input and output connectivity.</li>';
}

function mixer7(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'ORB 1822';
    document.getElementById('price').innerText = '₹ 41,500';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/orb1822_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/orb1822_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/orb1822_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mixer/orb1822_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = ' <li>Professional audio mixing consoles with 18 mic / 20 line inputs. </li><li>MON:Ster (mono-stereo) inputs for full flexibility. </li><li>One Knob Compressor on channels 1-8. </li><li>Ultra low-noise preamps with wide headroom and dynamic range. </li><li>Dual multi-EFX processor with 24 DSP presets and editable parameters. </li><li>Provisions to route EFX to monitor via Aux 1 and Aux 2. </li><li>Built-in USB MP3 media player and recorder with Bluetooth. </li><li>Level control, 2-band EQ with internal/external media input selection. </li><li>75Hz low cut on mono channels. </li><li>4-band EQ on all inputs. </li><li>5 Aux sends – Aux 1-3 (with pre/post selection) and Aux 4-5 (post only). </li><li>Stereo AUX returns. </li><li>Balanced XLR and ¼” jack main outputs. </li><li>2 sub groups with individual ¼” outputs. </li><li>Insert (send/return) on first 4 mono channels and main output. </li><li>Mute, solo, group (G1-G2) and main (L-R) routing per channel. </li><li>Peak, comp, mute and solo LEDs per channel. </li><li>Stereo RCA input and record output. </li><li>Headphone output with level control. </li><li>Globally switched +48V Phantom power supply. </li><li>Responsive 60mm faders. </li><li>7-band stereo graphic equalizer on main output. </li><li>Dual 10-segment LED meter for main, group and solo outputs. </li><li>Ergonomic angled-design for better visibility. </li><li>Clutter-free rear panel input and output connectivity.</li>';
}

function mixer8(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'ORB 2442';
    document.getElementById('price').innerText = '₹ 54,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/orb2442_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/orb2442_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mixer/orb2442_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mixer/orb2442_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>24 mic / 28 line inputs </li><li>MON:Ster (mono-stereo) inputs for full flexibility. </li><li>Ultra low-noise preamps with wide headroom and dynamic range. </li><li>75Hz low cut on mono channels. </li><li>4-band EQ on all inputs. </li><li>6 Aux sends – 4 pre/post and 2 post. </li><li>4 sub groups with individual 1⁄4” outputs. </li><li>Insert (send/return) on first 6 mono channels and main output. </li><li>Globally switched +48V phantom power supply. </li><li>Responsive 60mm faders. </li><li>One Knob Compressor on channels 1-10. </li><li>Dual multi-EFX processor with 24 DSP presets and editable parameters. </li><li>Provisions to route EFX to monitor via Aux 1 and Aux 2. </li><li>Built-in USB MP3 media player and recorder with Bluetooth. </li><li>USB audio interface with plug & play connectivity for recording and playback using a PC. </li><li>Level control, 2-band EQ with internal/external media input selection. </li><li>Stereo AUX returns. </li><li>Balanced XLR and 1⁄4” jack main outputs. </li><li>Mute, solo, group and main (L-R) routing per channel. </li><li>Peak, comp, mute and solo LEDs per channel. </li><li>Stereo RCA input and record output. </li><li>Headphone output with level control. </li><li>Dual Assignable 7-Band Stereo Graphic Equalizers. </li><li>Dual Assignable 10-Segment LED Meters for Main, Group and Solo Outputs. </li><li>Ergonomic angled-design for better visibility. </li><li>Clutter-free rear panel input and output connectivity.</li>';
}

function mixer9(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'AMX 812';
    document.getElementById('price').innerText = '₹ 10,500';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/amx812.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/amx812.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Input Channels: Each Channel has a 1/4” phone jack selectable for either Mic or Line input &amp; accepts both balanced &amp; unbalanced signals.</li><li>Stereo Channel: Independent Stereo input through separate 1/4” unbalanced phone jacks for Left &amp; Right channels.</li><li>Each channel has Gain, Bass, Treble, PAN, ECHO and Level controls with Clip LED indicator.</li><li>Echo section provided with Delay, Repeat &amp; Level controls. Tape section for Record &amp; Playback facility.</li>';
}

function mixer10(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'AMX 912DP';
    document.getElementById('price').innerText = '₹ 16,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/amx912dp.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/amx912dp.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Input Channels: Each Channel has separate 6.3mm (1/4”) balanced phone jack for Mic &amp; Line which accepts both balanced &amp; unbalanced signals.</li><li>USB Playback: Built-in MP3 Player selectable through Channel 9/USB Switch and controllable through an independant USB input volume control. Channel 9 can be used for Mic &amp; Line inputs or USB Playback function.</li><li>Mono/Stereo Output: Mono output is available from Left &amp; Right output jacks when the switch is in ‘Mono’ position.</li><li>Each channel has GAIN, BASS, TREBLE, ECHO, PAN and slide LEVEL controls with CLIP LED indicator.</li><li>Echo section provided with Delay, Repeat &amp; Level controls.&nbsp;</li><li>Stereo RCA IN/OUT for record and playback.</li><li>Headphone output with Level Control for output monitoring.</li>';
}

function mixer11(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'FMX 180DP';
    document.getElementById('price').innerText = '₹ 8,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/fmx180dp.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/fmx180dp.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Compact and reliable professional PA Mixer which is aesthetically superior and easily portable.</li><li>Provided with two balanced XLR microphone inputs, with switchable +48V Phantom supply.</li><li>Additionally, four low impedance microphones can be connected in either balanced or unbalanced configuration, through a 6.3 mm (1/4") stereo jack socket.</li><li>Upto six line level signal sources can be connected in either balanced or unbalanced configuration, through a 6.3mm (1/4") stereo jack socket.</li><li>Each channel has a GAIN control for optimum adjustment of the MIC &amp; LINE input sensitivities.</li><li>Two band equalizer with active BASS &amp; TREBLE controls in each channel for desired equalisation of the input signal.</li><li>Separate FX (effects) level control for each input channel.</li><li>MP3 digital player with recording and playback through USB. Bluetooth facility also available.</li><li>One independent stereo input channel is provided with a GAIN control, 2 band EQ, FX &amp; LEVEL Controls.</li><li>Each channel has a PEAK LED which glows when the level of input signal is excessive.</li><li>A push switch is provided for selection between Ch 7/8 and USB channel.</li><li>Built-in digital effects processor with DELAY, REPEAT and LEVEL controls.</li><li>Effects ON/OFF switch with FX ON &amp; PEAK LEDs.</li><li>Line level LEFT &amp; RIGHT outputs through 6.3 mm (1/4") stereo jack sockets.</li><li>Headphone output, with independent volume control, is available through a 6.3mm (1/4") stereo jack socket.</li><li>Individual SIGNAL &amp; CLIP LEDs for optimum setting of Left &amp; Right output levels.</li><li>Individual MASTER volume controls for Left &amp; Right line outputs.</li><li>Operates on 240V, 50Hz AC Mains.</li>';
}

function mixer12(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'PMX 1032 FX';
    document.getElementById('price').innerText = '₹ 14,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/pmx1032fx.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/pmx1032fx.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Rugged, stable, high quality analog mixers with user-friendly construction &amp; aesthetically designed side panels.</li><li>PMX-1032FX has 8 MIC/LINE Balanced Mono input channels and 1 STEREO Balanced input channel.</li><li>MIC/LINE Balanced Mono inputs with enhanced headroom.</li><li>All MIC inputs are through 3 pin F/XLR connectors and All LINE &amp; STEREO inputs are through 6.3mm stereo phone jack sockets.</li><li>Four MIC inputs (MIC-1 to MIC-4) are available with 48V phantom supply which can be switched ON/OFF through a common switch.</li><li>STEREO Balanced input in two selectable sensitivities of -10dBu &amp; +4dBu.</li><li>Separate EFFECT channel is provided for controlling the built-in digital effect processor through a delay selector switch and delay, repeat and level controls.</li><li>Each MIC/LINE channel has a GAIN control, 3 band active Equalizer controls, a Pre-fader AUX1 control, a Post-fader</li><li>AUX2 /EFX control &amp; a PAN control.</li><li>Each Stereo channel has a GAIN control, 2 band active Equalizer controls, AUX1 Pre fader control, AUX2/EFX Post fader control and a BALANCE control.</li><li>Channel ON/OFF switch provided on each individual channel. Peak LED for signal clipping indication.</li><li>High precision 60mm slide fader on each channel.</li><li>Balanced Left &amp; Right Line outputs through M/XLR connectors as well as 6.3mm stereo phone jack sockets.</li><li>Easy and accurate monitoring of Left &amp; Right output levels through individual 12 segment LED array.</li><li>Two AUX SEND outputs with level controls: one each for monitoring and effects processing applications.</li><li>Two stereo AUX RETURN balanced inputs with level controls.</li><li>Headphone output with Level Control for output monitoring.</li><li>Stereo Tape Playback inputs through L&amp;R RCA sockets provided with ON/OFF switch &amp; level control.</li><li>Stereo Record output through L&amp;R RCA sockets.</li><li>Operates on 240V 50Hz AC mains.</li>';
}

function mixer13(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Promix 1442';
    document.getElementById('price').innerText = '₹ 28,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mixer/promix1442.png';
    document.getElementById('img1').src = './image/PA_sound_system/mixer/promix1442.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional mixer with user-friendly construction &amp; aesthetically designed side panels.</li><li>12 MIC and 10 LINE Balanced Mono inputs with enhanced headroom. 2 STEREO Balanced inputs.</li><li>Built-in MP3 player with 11 preset EQ settings.</li><li>Digital multi EFFECTS processor with 24 built-in effects.</li><li>LCD display for viewing the effects/USB settings.</li><li>All MIC inputs are through 3 pin F/XLR connectors.</li><li>All LINE &amp; STEREO inputs are through 6.3mm (1/4”) stereo phone jack sockets.</li><li>All MIC inputs are available with 48V phantom supply which can be switched ON/OFF.</li><li>Each input channel has a GAIN control, 4 band active EQ controls, AUX1, AUX2, AUX3/EFX, AUX4/FX and PAN control.</li><li>The STEREO channel has a GAIN control, 3 band active EQ control, AUX1, AUX2, AUX3/EFX, AUX4/FX and PAN control.</li><li>Pre/Post selector switch for AUX1 and AUX2 in each channel.</li><li>Channel MUTE switch provided on each individual channel.</li><li>Peak LED for signal clipping indication. Signal LED for input signal indication.</li><li>Balanced Left &amp; Right MAIN Mix outputs through M/XLR connectors as well as 6.3mm (1/4”) stereo phone jack sockets.</li><li>Stereo Tape Playback Input through L&amp;R RCA sockets.</li><li>Stereo Tape Output through L&amp;R RCA sockets.</li><li>Two group outputs through 6.3mm (1/4”) phone jack sockets and individual group faders.</li><li>Monitor outputs through 6.3mm (1/4”) phone jack sockets and individual control.</li><li>Easy and accurate monitoring of Left &amp; Right output levels through individual 12 segment LED array.</li><li>L&amp;R AUX RETURN inputs with level control. PFL switch on each channel.</li><li>Headphone output with Level Control for output monitoring.</li><li>Operates on 240V 50Hz AC mains.</li>';
}

function mic1(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'AWM 14';
    document.getElementById('price').innerText = '₹ 7,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mic/a_awm14_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mic/a_awm14_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mic/a_awm14_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mic/a_awm14_3.png';
    document.getElementById('img4').src = './image/PA_sound_system/mic/a_awm14_4.png';
    document.getElementById('features').innerHTML = '<li>[SELECTABLE UHF FREQUENCIES]: - UHF karaoke microphone operation minimizes interference and disconnectivity. Dual channel handheld wireless system with 15 adjustable frequencies each channel for the musicians and presenters to eliminate possible inferences and offer accurate audio. The dual-channel receiver is designed with ease of use in mind and is well suited for DJs, Weddings, Concerts and classroom.  </li>  <li>[2-Way Communication System]: - Metal Dynamic microphone with unique dipole-antenna design ensures reliable transmission, capably provide a line-of-sight long range of up to 60m/200ft. (Note: ensure the antennas are upright.) Best built quality vocal microphone set with 1- 1/4 Mix output and 2- XLR outputs delivers professional quality sound.  </li>  <li>[DUAL MIC SETUP]: - You get two microphones making it ideal for duet. Individual volume controls for each mic channel allows precise vocal mixing. This streamlined system is well suited for live performances, outdoor events, wedding, halls conference which offers quality sound, simple setup and dependable performance right out of the box. Compatible with mixers, audio interfaces, PA systems, party boxes.  </li>  <li>[HIGH PERFORMANCE]: -Wireless handheld microphone with robust UHF performance lets you step up to a higher class of audio. Bright LCD display provides for flawless operation.  </li>  <li>[MIC COVER &amp; ANTI-ROLL RING]: - The mic cover included is thick and soft enough to reduce breath and wind noise. It effectively reduces explosions, wind disturbances, saliva sprays, loud sound during recording. The anti-roll ring is protecting your microphone from shocks and also preventing your microphone from rolling off from a slippery surface.  </li>  <li>[WHAT YOU GET]: - 2 x UHF Wireless Microphones, 1 x Powered Receiver, 2 x Mic covers, 2 x Anti-roll rings, 1 x power adapter, 1 x Manual, (2 x AA battery not included).  </li>';
}

function mic2(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'AWM 495 V2';
    document.getElementById('price').innerText = '₹ 5,299';
    document.getElementById('main-image').src = './image/PA_sound_system/mic/a_awm495v2_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mic/a_awm495v2_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mic/a_awm495v2_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mic/a_awm495v2_3.png';
    document.getElementById('img2').style.width = '65px';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Sleek in terms of design</li><li>Scores high on the aspect of functionality</li><li>Designed as per the latest industry standards</li>' ;
}

function mic3(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'BR 48';
    document.getElementById('price').innerText = '₹ 9,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mic/s_br48_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mic/s_br48_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mic/s_br48_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mic/s_br48_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>UHF Band frequency by PLL – Synthesis Technology</li><li> 8 Selectable UHF Channels</li><li> Two Microphones can be used at the same time</li><li> Double noise squelching circuit to ensure excellent sound quality</li><li> LED for Channel information Display</li><li> Highly efficient & Low Energy consumption design</li><li> The BR48/BM28/BL28 consists of one BM 28 handheld & one BL 28 Lapel microphones</li>' ;
}

function mic4(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'EM 31';
    document.getElementById('price').innerText = '₹ 8,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mic/s_em31_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mic/s_em31_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mic/s_em31_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mic/s_em31_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>VHF Band frequency Quartz Lock Control.</li><li>Dual Channel Receiver.</li><li>LED Indicator (Power, RF) &amp; Telescopic antenna.</li><li>Special Circuit design to suppress microphone switch noise.</li><li>The ER 31/ EM 31 / EL 31 consists of one EM 31 handheld &amp; one EL 31 Lapel microphones.</li>' ;
}

function mic5(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'TR 44';
    document.getElementById('price').innerText = '₹ 8,499';
    document.getElementById('main-image').src = './image/PA_sound_system/mic/s_tr44_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mic/s_tr44_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mic/s_tr44_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mic/s_tr44_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>High Quality Dual Handheld UHF Wireless Microphone System.</li><li>Up to 200 Selectable Frequencies.</li><li>Easy Setup via Infrared (IR).</li><li>Two microphones can be used at the same time.</li><li>Anti Mobile &amp; RF Interference Technology.</li><li>Clear Backlit LCD Colour Display for Frequency, channel, RF, AF &amp; Battery Level Indication.</li><li>Tactile Switches for Frequency Adjustment, Sync, Set &amp; Volume Control.</li><li>Frequency Lock Option to Minimise Tampering During Operation.</li><li>Balanced XLR (Individual Channels) &amp; Unbalanced ¼" Jack (Mix) Outputs.</li><li>Premium, Robust &amp; Attractive Metal Housing.</li>' ;
}

function mic6(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'ER 31';
    document.getElementById('price').innerText = '₹ 8,999';
    document.getElementById('main-image').src = './image/PA_sound_system/mic/s_er31_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/mic/s_er31_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/mic/s_er31_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/mic/s_er31_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>2 lapel microphones &amp; 1 receiver.</li><li>Dual Channel Receiver.</li><li>LED Indicator( Power, RF) &amp; Telescopic antenna.</li><li>Special Circuit design to suppress microphone switch noise.</li><li>Individual channel output as well as mix output.</li><li>VHF Band Frequency Quartz Lock Control</li>' ;
}

function speaker1(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Aria 12';
    document.getElementById('price').innerText = '₹ 14,999';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/s_aria12.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/s_aria12.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>High quality Two -way  Passive Speakers in a plastic moulded cabinet.</li> <li>Heavy Duty Plastic Moulded Cabinets.</li> <li>Integral stand mounting socket. </li><li>Parallel input connectors allow linking of additional speakers</li>';
}

function speaker2(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Aria 15';
    document.getElementById('price').innerText = '₹ 21,000';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/s_aria15.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/s_aria15.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>High quality Two -way  Passive Speakers in a plastic moulded cabinet.</li> <li>Heavy Duty Plastic Moulded Cabinets.</li> <li>Integral stand mounting socket. </li><li>Parallel input connectors allow linking of additional speakers</li>';
}

function speaker3(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'Cilo 124';
    document.getElementById('price').innerText = '₹ 26,000';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/s_cilo124_1.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/s_cilo124_1.png';
    document.getElementById('img2').src = './image/PA_sound_system/speaker/s_cilo124_2.png';
    document.getElementById('img3').src = './image/PA_sound_system/speaker/s_cilo124_3.png';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>High-performance 2-way bi-amplified 325W (RMS) active loudspeaker.</li> <li>Driven by an efficient class D amplifier.</li> <li>Easy DSP sound presets (flat / speech / music / live / club).</li> <li>Integrates a 12” LF and 1” HF to deliver high SPL and a wide dispersion area.</li> <li>USB/SD MP3 player and Bluetooth.</li> <li>True Wireless Stereo (TWS) for Pairing Two Units.</li> <li>Inputs: 1 x Stereo RCA, 1 x XLR-Jack (line) & 1 x switchable XLR-Jack (mic/line).</li> <li>XLR mix out for linking additional speakers. </li><li>Built-in soft clip limiter for speaker protection.</li> <li>Ergonomically-shaped handles for easy transportation.</li> <li>Durable plastic moulded enclosure with a wood grain finish.</li>';
}

function speaker4(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'S8028';
    document.getElementById('price').innerText = '₹ 110,000';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/s_s8028.png';
    document.getElementById('img1').style.width = '160px';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/s_s8028.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional Loudspeakers series powered by high quality RCF transducers specially designed for high end touring & installation systems.</li> <li>State of art crossover design in the mid-hi-tops to enhance the frequency response. </li><li>Exceptional sound quality, wide frequency bandwidth and dynamic range</li> <li>Dual-Speakon connectors allow linking of additional loudspeakers.</li> <li>High grade & durable cabinet design. </li><li>Ergonomically shaped handles for easy transportation.</li> <li>Heavy Duty perforated steel speaker grille for optimal speaker protection.</li>';
}

function speaker5(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'S 8218';
    document.getElementById('price').innerText = '₹ 80,000';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/s_s8218.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/s_s8218.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>loudspeakers featuring high-quality RCFTM transducers specially-designed for high-end touring and installations.</li> <li>Exceptional sound quality with a wide frequency bandwidth and dynamic range.</li> <li>dual Speakon connectors for input connectivity and linking additional loudspeakers.</li> <li>and durable cabinet design with a rugged paint finish built for the road.</li> <li>handles for easy transportation.</li> <li>perforated metal grille for optimal speaker protection.</li>';
}

function speaker6(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'XVP 2820';
    document.getElementById('price').innerText = '₹ 50,000';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/s_xvp2820.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/s_xvp2820.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional Budget conscious Loudspeakers systems highly recommended for a variety outdoor& indoor applications.</li> <li>Rugged wooden, black carpet finish enclosures.</li> <li>Ergonomically shaped handles for easy transportation.</li> <li>Parallel input connectors allow linking of additional speakers.</li> <li>Heavy Duty perforated metal speaker grille for optimal speaker protection.</li> <li>Trapezoidal shaped enclosures for the mid-hi tops for easy array and sonic accuracy.</li>';
}


function speaker7(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'SRM 220';
    document.getElementById('price').innerText = '₹ 10,999';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/a_srm220.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/a_srm220.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Compact 2-Way Floor Monitor speaker system comprising of a single 38.1cm (15”) Full Range Dual Cone Speaker and a Piezo Horn Tweeter.</li><li> The unique multi functional trapezoidal design of the enclosure for effective floor monitoring in various indoor & outdoor applications.</li><li>The system is housed in an acoustically treated Bass Reflex enclosure made of 18mm board and carpet covered.</li><li> An On/Off switch for the piezo speaker is provided to limit extended HF, if desired. Stand mount adaptor is provided at the bottom.</li>';
}

function speaker8(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'SRX 120';
    document.getElementById('price').innerText = '₹ 7,700';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/a_srx120.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/a_srx120.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li> Input Power 100W RMS.</li>  <li> Configuration Two Way.</li>  <li> Frequency Response 55-20,000Hz.</li>  <li> Low Frequency Speaker 1 x 304.8 mm (12”), Ø38.1 mm (1.5”) Voice Coil.</li>  <li> High Frequency Unit 1 x Piezo Horn Tweeter 2”×5”.</li>';
}

function speaker9(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'SRX 200';
    document.getElementById('price').innerText = '₹ 9,500';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/a_srx200.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/a_srx200.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional 2-Way PA Speaker System to provide superb LF Response, High Efficiency and Long Throw with Excellent Sound Intelligibility.</li><li> It consists of one 30.48 cm (12”) Full Range Dual Cone Speaker and a Piezo Horn Tweeter.</li><li> The system is housed in an acoustically treated Bass Reflex enclosure made of 18mm board, and carpet covered. Stand mount adaptor is provided at the bottom.</li>';
}

function speaker10(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'SRX 220';
    document.getElementById('price').innerText = '₹ 10,999';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/a_srx220.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/a_srx220.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional 2-Way speaker system with high efficiency, long throw & clean undistorted sound for both speech & music.</li><li> It consists of one 38.1 cm ( 15 Inch ) Full Range Dual Cone Speaker and a Piezo Horn Tweeter.</li><li> The system is housed in an acoustically treated Bass Reflex Trapezoidal enclosure made of 18mm board, and carpet covered.</li><li> Stand mount adaptor is provided at the bottom.</li>';
}

function speaker11(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'SRX 440';
    document.getElementById('price').innerText = '₹ 15,500';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/a_srx440.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/a_srx440.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>New high power, high efficency professional speaker system with well-balanced wide-spectrum sound.</li><li> Consists of two 30.48 cm (12”) Dual Cone Speakers and a Pizeo Horn Tweeter fitted in a rugged bass reflex carpet covered enclosure.</li><li> The cabinet has been fitted with heavy-duty handles to allow ease of transportation and a strong steel grille for speaker protection.</li><li> A stand adapter is provided at the bottom for pole mounting.</li><li> Ideal for DJ’s variety music programmes and general PA applications.</li><li> Rated at 400 Watts RMS.</li>';
}

function speaker12(event){
    event.preventDefault();
    document.documentElement.classList.add("no-scroll");
    document.getElementById('product-container').style.display = 'flex';
    document.getElementById('product-name').innerText = 'SRX 510';
    document.getElementById('price').innerText = '₹ 24,999';
    document.getElementById('main-image').src = './image/PA_sound_system/speaker/a_srx510.png';
    document.getElementById('img1').src = './image/PA_sound_system/speaker/a_srx510.png';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('features').innerHTML = '<li>Professional 2-way speaker system with exceptional efficiency, long throw and unmatched intelligibility of sound.</li><li> It consists of two 38.1cm ( 15 Inch ) high performance full range dual cone speakers and a High frequency compression driver.</li><li> The speaker system is housed in an acoustically treated Bass Reflex Trapezoidal with durable paint finish enclosure.</li><li> The cabinet has been fitted with heavy-duty handles to allow ease of transportation and a strong steel grille for speaker protection.</li><li>Ideal for both indoor and outdoor sound reinforcement applications.</li><li> Specially designed for Auditoriums and DJs.</li>';
}