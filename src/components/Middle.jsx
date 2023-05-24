import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FaRegHandshake } from 'react-icons/fa';
import { BsFlower1, BsCheckCircle } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import { RiSeedlingLine } from 'react-icons/ri';
import { GoLightBulb } from 'react-icons/go';
import { GiMaterialsScience, GiTestTubes } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import React from 'react';
import '../style/middle.css';
import care from '../about-1-2.png';
import demo from '../photo-1601049676869-702ea24cfd58.png';

export function Middle() {
    return (
        <div>
            <Navbar />
            <div className='first-section' >
                <div className='text-section'>
                    <p className='intro'>CE QUE NOUS FAISONS</p>
                    <h1>Conception, fabrication et distribution de produits cosmétiques</h1>
                    <p className='content'>Synonyme d’expertise, de qualité irréprochable et de meilleurs prix.
                    Les produits Bionoor sont basés sur les recettes authentiques tirées de l’héritage ancien et original de grand-mère, 
                    transmis de génération en génération, 
                    revu et mis à jour pour répondre aux habitudes de consommations actuelles .
                    Grace à vous nous avons grandi, petit à petit , 
                    en enrichissant notre gamme au fur et à mesure de vos demandes et de nos découvertes.</p>
                    <ul className='stats'>
                        <li>
                            <p className='value'>14</p>
                            <p className='title'>Années d'expérience</p>
                        </li>
                        <li>
                            <p className='value'>30K</p>
                            <p className='title'>Clients satisfaits</p>
                        </li>
                        <li>
                            <p className='value'>95%</p>
                            <p className='title'>Satisfaction des clients</p>
                        </li>
                    </ul>    
                </div>
                <img src={demo} />
            </div>
            <div className='second-section'>
                <img src={care} className='care'/>
                <h1>Nos Valeurs & Engagements</h1>
                <div className='cards-one'>
                    <div className='card'>
                        <h1>Transparence</h1>
                        <p>Nous vous fournissons en toute transparence toutes les informations concernant nos produits.</p>
                        <span className='icon'><FaRegHandshake size="95px" style={{ opacity: '90%' }} color='white'/></span>
                    </div>
                    <div className='card'>
                        <h1>Innovation</h1>
                        <p>Afin de vous proposer le meilleur, notre équipe ne cessent de créer et formuler des recettes uniques rien que pour vous !</p>
                        <span className='icon'><BsFlower1 size="75px" style={{ opacity: '90%' }} color='white'/></span>
                    </div>
                </div>
                <div className='cards-two'>
                    <div className='card'>
                        <h1>Générosité</h1>
                        <p>Pour profiter pleinement de nos produits, nous mettons à votre disposition un concentre d’informations par le biais de nos fiches techniques,
                         articles et nos conseils ! </p>
                        <span className='icon'><RiSeedlingLine size="75px" style={{ opacity: '90%' }} color='white'/></span>
                    </div>
                    <div className='card'>
                        <h1>Ecoute</h1>
                        <p>Pour répondre à vos exigences ainsi qu’à vos questions, nous mettons à votre disposition une équipe formée en la matière pour répondre à vos besoins</p>
                        <span className='icon'><GoCommentDiscussion  size="80px" style={{ opacity: '90%'}} color='white'/></span>
                    </div>
                </div>
            </div>
            <div className='third-section'>
                <h1>Notre Processus de Production</h1>
                <ul className='cards'>
                    <li className='card'>
                        <GoLightBulb size="60px" />
                        <p>Formulation de la Recette</p>
                    </li>
                    <li className='card'>
                        <GiMaterialsScience size="60px" />
                        <p>Tests Microbiologique</p>
                    </li>
                    <li className='card'>
                        <GiTestTubes size="60px" />
                        <p>Test sur les Différentes Peaux</p>
                    </li>
                    <li className='card'>
                        <BsCheckCircle size="60px" />
                        <p>Validation par nos Laboratoires</p>
                    </li>
                    <li className='card'>
                        <AiOutlineShoppingCart size="60px" />
                        <p>Lancement Produit</p>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
