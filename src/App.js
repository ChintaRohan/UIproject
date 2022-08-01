import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import hulk1 from './MCU/hulk1.jpg';
import avengers1 from './MCU/avengers1.jpg';
import ironman1 from './MCU/ironman1.jpg';
import ironman2 from './MCU/ironman2.jpg';
import thor1 from './MCU/thor1.jpg';
import cAmerica1 from './MCU/captainAmerica1.jpg'
import avengers1logo from './logo/avengers1logo.jpg';
import avengers2logo from './logo/avengers2logo.jpg';
import avengers3logo from './logo/avengers3logo.jpg';
import avengers4logo from './logo/avengers4logo.jpg';
import ironman3 from './MCU/ironman3.jpg'
import thor2 from './MCU/thor2.jpg';
import captainamerica2 from './MCU/captainamerica2.jpg';
import gog1 from './MCU/gog1.jpg';
import antman1 from './MCU/antman1.jpg';
import avengers2 from './MCU/avengers2.jpg';
import civilwar from './MCU/civilwar.jpg';
import doctorstrange1 from './MCU/doctorstrange1.jpg'
import gog2 from './MCU/gog2.jpg';
import spiderman1 from './MCU/spiderman1.jpg';
import thor3 from './MCU/thor3.jpg';
import blackpanther1 from './MCU/blackpanther1.jpg';
import avengers3 from './MCU/avengers3.jpg';
import antman2 from './MCU/antman2.jpg';
import captainmarvel1 from './MCU/captainmarvel1.jpg';
import avengers4 from './MCU/avengers4.jpg';
import spiderman2 from './MCU/spiderman2.jpg';
import blackwidow1 from './MCU/blackwidow1.jpg';
import shangchi1 from './MCU/shangchi1.jpg';
import eternals1 from './MCU/eternals1.jpg';
import spiderman3 from './MCU/spiderman3.jpg';
import doctorstrange2 from './MCU/doctorstrange2.jpg';
import thor4 from './MCU/thor4.jpg';
import './App.css';
import facebook from './footer/facebook.svg';
import Twitter from './footer/twitter.svg';
import Instagram from './footer/instagram.svg';
import Linkedin from './footer/linkedin.svg';

function App() {
  return (
    <div>
      <div className='video' id="one">
      <iframe src="https://www.youtube.com/embed/8ugaeA-nMTc" title="Iron Man (2008) Trailer #1 | Movieclips Classic Trailers"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <br/>
        <button className='button-29' align="center" onClick={()=>{document.getElementById("block").style.display="block"; document.getElementById("one").style.display="none";}}>close</button>
      </div>
      <div className='video' id="two">
      <iframe src="https://www.youtube.com/embed/xbqNb2PFKKA" title="The Incredible Hulk (2008) Official Trailer - Edward Norton, Liv Tyler Movie HD"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <br/>
        <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("two").style.display="none";}}>close</button>
      </div>
      <div className='video' id="three">
      <iframe src="https://www.youtube.com/embed/BoohRoVA9WQ" title="Iron Man 2 Official Trailer #1 (2010) - Marvel Movie HD"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <br/>
        <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("three").style.display="none";}}>close</button>
      </div>
      <div className='video' id="four">
      <iframe src="https://www.youtube.com/embed/JOddp-nlNvQ" title="Thor - Trailer (OFFICIAL)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>        
      <br/>
        <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("four").style.display="none";}}>close</button>
      </div>
      <div className='video' id="five">
      <iframe src="https://www.youtube.com/embed/JerVrbLldXw" title="Captain America: The First Avenger - Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>        
      <br/>
        <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("five").style.display="none";}}>close</button>
      </div>
      <div className='video' id="six">
      <iframe src="https://www.youtube.com/embed/eOrNdBpGMv8" title="Marvel's The Avengers- Trailer (OFFICIAL)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>        
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("six").style.display="none";}}>close</button>
      </div>
      <div className='video' id="seven">
      <iframe src="https://www.youtube.com/embed/f_h95mEd4TI" title="Marvel's Iron Man 3 Domestic Trailer (OFFICIAL)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>        
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("seven").style.display="none";}}>close</button>
      </div>
      <div className='video' id="eight">
      <br/>
      <iframe src="https://www.youtube.com/embed/npvJ9FTgZbM" title="Thor: The Dark World Official Trailer HD"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>        
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("eight").style.display="none";}}>close</button>
      </div>
      <div className='video' id="nine">
      <br/>
      <iframe src="https://www.youtube.com/embed/7SlILk2WMTI" title="Marvel's Captain America: The Winter Soldier - Trailer 2 (OFFICIAL)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>        
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("nine").style.display="none";}}>close</button>
      </div>
      <div className='video' id="ten">
      <iframe width="1520" height="585" src="https://www.youtube.com/embed/d96cjJhvlMA" title="Marvel's Guardians of the Galaxy - Trailer 1 (OFFICIAL)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("ten").style.display="none";}}>close</button>
      </div>
      <div className='video' id="eleven">
      <iframe src="https://www.youtube.com/embed/tmeOjFno6Do" title="Marvel's Avengers Age of Ultron"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("eleven").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twelve">
      <iframe src="https://www.youtube.com/embed/pWdKf3MneyI" title="Marvel's Ant-Man - Trailer 1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>      
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twelve").style.display="none";}}>close</button>
      </div>
      <div className='video' id="thirteen">
      <iframe src="https://www.youtube.com/embed/dKrVegVI0Us" title="Marvel's Captain America: Civil War - Trailer 2"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>     
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("thirteen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="fourteen">
      <iframe src="https://www.youtube.com/embed/Lt-U_t2pUHI" title="Marvel's Doctor Strange Teaser Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>    
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("fourteen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="fifteen">
      <iframe src="https://www.youtube.com/embed/dW1BIid8Osg" title="Guardians of the Galaxy Vol. 2 Teaser Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>    
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("fifteen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="sixteen">
      <iframe src="https://www.youtube.com/embed/39udgGPyYMg" title="Spider-Man: Homecoming - Official Trailer 2 [HD]"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>    
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("sixteen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="seventeen">
      <iframe src="https://www.youtube.com/embed/ue80QwXMRHg" title="Thor: Ragnarok Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("seventeen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="eighteen">
      <iframe src="https://www.youtube.com/embed/xjDjIWPwcPU" title="Marvel Studios' Black Panther - Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("eighteen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="nineteen">
      <iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8" title="Marvel Studios' Avengers: Infinity War Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>    
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("nineteen").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twenty">
      <iframe src="https://www.youtube.com/embed/8_rTIAOohas" title="Marvel Studios' Ant-Man and the Wasp - Official Trailer #1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twenty").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentyone">
      <iframe src="https://www.youtube.com/embed/Z1BCujX3pw8" title="Marvel Studios' Captain Marvel - Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentyone").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentytwo">
      <iframe src="https://www.youtube.com/embed/TcMBFSGVi1c" title="Marvel Studios' Avengers: Endgame - Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentytwo").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentythree">
      <iframe src="https://www.youtube.com/embed/Nt9L1jCKGnE" title="SPIDER-MAN: FAR FROM HOME - Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentythree").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentyfour">
      <iframe src="https://www.youtube.com/embed/ybji16u608U" title="Marvel Studios' Black Widow | Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentyfour").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentyfive">
      <iframe src="https://www.youtube.com/embed/x_me3xsvDgk" title="Marvel Studios' Eternals | Final Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentyfive").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentysix">
      <iframe src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="Marvel Studios' Shang-Chi and the Legend of the Ten Rings | Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentysix").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentyseven">
      <iframe src="https://www.youtube.com/embed/rt-2cxAiPJk" title="SPIDER-MAN: NO WAY HOME - Official Teaser Trailer (HD)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentyseven").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentyeight">
      <iframe src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="Marvel Studios' Doctor Strange in the Multiverse of Madness | Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>   
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentyeight").style.display="none";}}>close</button>
      </div>
      <div className='video' id="twentynine">
      <iframe src="https://www.youtube.com/embed/Go8nTmfrQd8" title="Marvel Studios' Thor: Love and Thunder | Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
      <br/>
      <button className='button-29' onClick={()=>{document.getElementById("block").style.display="block";document.getElementById("twentynine").style.display="none";}}>close</button>
      </div>
      <div className='block' id="block">
        <div className='Container'>
          <div className='logoClass' align="center">
            <Carousel>
              <Carousel.Item>
                <img className="logo" src={avengers1logo} alt='avengers1' />
              </Carousel.Item>
              <Carousel.Item>
                <img className="logo" src={avengers2logo} alt='avengers2' />
              </Carousel.Item>
              <Carousel.Item>
                <img className="logo" src={avengers3logo} alt='avengers3' />
              </Carousel.Item>
              <Carousel.Item>
                <img className="logo" src={avengers4logo} alt='avengers4' />
              </Carousel.Item>
            </Carousel><br /><br />
          </div>
          <div className='title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase - I</div><br />
          <div className='mainContainer'>
            <div className='insideContainer'>
              <Card className='moviecard'>
                <Card.Img variant="top" src={ironman1} alt='ironman1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Iron Man 1</Accordion.Header>
                      <Accordion.Body>
                        A billionaire industrialist and genius inventor,
                        Tony Stark (Robert Downey Jr.), is conducting weapons
                        tests overseas, but terrorists kidnap him to force him
                        to build a devastating weapon. Instead, he builds an
                        armored suit and upends his captors. Returning to America,
                        Stark refines the suit and uses it to combat crime and terrorism.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("one").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={hulk1} alt='hulk1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Incredible Hulk</p></Accordion.Header>
                      <Accordion.Body>
                        Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("two").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;

              <Card className='moviecard'>
                <Card.Img variant="top" src={ironman2} alt='avengers1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Iron Man 2</p></Accordion.Header>
                      <Accordion.Body>
                        With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and "Rhodey" Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("three").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={thor1} alt='thor1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Thor</p></Accordion.Header>
                      <Accordion.Body>
                        As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("four").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={cAmerica1} alt='captainamerica1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Captain America</p></Accordion.Header>
                      <Accordion.Body>
                        It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("five").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={avengers1} alt='avengers1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Avengers</p></Accordion.Header>
                      <Accordion.Body>
                        When Thor's evil brother, Loki (Tom Hiddleston),
                        gains access to the unlimited power of the energy
                        cube called the Tesseract, Nick Fury (Samuel L. Jackson),
                        Director of S.H.I.E.L.D., initiates a superhero
                        recruitment effort to defeat the unprecedented
                        threat to Earth
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("six").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div><br /><br />

          <div className='title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase - II</div><br />
          <div className='mainContainer'>
            <div className='insideContainer'>
              <Card className='moviecard'>
                <Card.Img variant="top" src={ironman3} alt='ironman3' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Iron Man 3</p></Accordion.Header>
                      <Accordion.Body>
                        Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("seven").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={thor2} alt='thor2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Thor - The Dark World</Accordion.Header>
                      <Accordion.Body>
                        In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("eight").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={captainamerica2} alt='captainamerica2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Captain America - The Winter Soldier </p></Accordion.Header>
                      <Accordion.Body>
                        After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("nine").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={gog1} alt='gog1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Guardians of the Galaxy</p></Accordion.Header>
                      <Accordion.Body>
                        Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("ten").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={avengers2} alt='avengers2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Avengers - Age of Ultron</p></Accordion.Header>
                      <Accordion.Body>
                        When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("eleven").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={antman1} alt='antman1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Ant Man</p></Accordion.Header>
                      <Accordion.Body>
                        Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twelve").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
            </div>
          </div><br /><br />

          <div className='title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase - III</div><br />
          <div className='mainContainer'>
            <div className='insideContainer'>
              <Card className='moviecard'>
                <Card.Img variant="top" src={civilwar} alt='civilwar' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Captain America Civil War</p></Accordion.Header>
                      <Accordion.Body>
                        Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("thirteen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={doctorstrange1} alt='doctorstrange1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Doctor Strange</Accordion.Header>
                      <Accordion.Body>
                        Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("fourteen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={gog2} alt='gog2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Guardians of the Galaxy Vol.2</p></Accordion.Header>
                      <Accordion.Body>
                        Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("fifteen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={spiderman1} alt='spiderman1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Spiderman Homecoming</p></Accordion.Header>
                      <Accordion.Body>
                        Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("sixteen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={thor3} alt='thor3' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Thor Ragnarock</p></Accordion.Header>
                      <Accordion.Body>
                        Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("seventeen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={blackpanther1} alt='blackpanther1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Black Panther</p></Accordion.Header>
                      <Accordion.Body>
                        After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("eighteen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
            </div>
          </div><br /><br />
          <div className='mainContainer'>
            <div className='insideContainer'>
              <Card className='moviecard'>
                <Card.Img variant="top" src={avengers3} alt='avengers3' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Avengers Infinity War</p></Accordion.Header>
                      <Accordion.Body>
                        Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("nineteen").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={antman2} alt='antman2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Ant-Man and the Wasp</Accordion.Header>
                      <Accordion.Body>
                        Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo finds itself in an epic battle against a powerful new enemy.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twenty").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={captainmarvel1} alt='captainmarvel1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Captain Marvel</p></Accordion.Header>
                      <Accordion.Body>
                        Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentyone").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={avengers4} alt='avengers4' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Avengers ENDGAME</p></Accordion.Header>
                      <Accordion.Body>
                        Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentytwo").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={spiderman2} alt='spiderman2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Spiderman Far from Home</p></Accordion.Header>
                      <Accordion.Body>
                        Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentythree").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div><br /><br />

          <div className='title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase - IV</div><br />
          <div className='mainContainer'>
            <div className='insideContainer'>
              <Card className='moviecard'>
                <Card.Img variant="top" src={blackwidow1} alt='blackwidow1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Black Widow</p></Accordion.Header>
                      <Accordion.Body>
                        Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentyfour").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={shangchi1} alt='shangchi1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Shang-Chi</Accordion.Header>
                      <Accordion.Body>
                        Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentyfive").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={eternals1} alt='eternals1' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Eternals</p></Accordion.Header>
                      <Accordion.Body>
                        The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentysix").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={spiderman3} alt='spiderman3' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Spiderman No way Home</Accordion.Header>
                      <Accordion.Body>
                        With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentyseven").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={doctorstrange2} alt='doctorstrange2' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Doctor Strange in the Multiverse of Madness</p></Accordion.Header>
                      <Accordion.Body>
                        Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentyeight").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
              <Card className='moviecard'>
                <Card.Img variant="top" src={thor4} alt='thor4' />
                <Card.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><p className='aHeader'>Thor: Love and Thunder</p></Accordion.Header>
                      <Accordion.Body>
                        Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who -- to his surprise -- inexplicably wields his magical hammer. Together, they set out on a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br />
                  <Button variant='primary' className='button-29' onClick={()=>{document.getElementById("block").style.display="none"; document.getElementById("twentynine").style.display="block";}}>
                    Play{' '}<Badge pill bg='success'><div className='triangle'></div></Badge>
                  </Button>
                </Card.Body>
              </Card>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

          </div><br /><br />

          <div class="footer" ><br />
            <button className='footerButton'><img src={facebook} className="footerImage" alt="facebook"></img></button>
            <button className='footerButton'><img src={Instagram} className="footerImage" alt="instagram"></img></button>
            <button className='footerButton'><img src={Linkedin} className="footerImage" alt="linkedin"></img></button>
            <button className='footerButton'><img src={Twitter} className="footerImage" alt="twitter"></img></button><br /><br />
            <p className='footerNotes'>Chinta Rohan, Trainee Analyst<br />
              Wissen Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
