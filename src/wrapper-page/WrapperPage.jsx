import React from 'react';
import './css/wrapperPage.css'

// titles
import TitleInfoWrapper from '../modules/titles/wrapper/TitleInfoWrapper';
import TitleMain from '../modules/titles/title-main/TitleMain';
import TitleListRecomended from '../modules/titles/title-list-recommended/TitleListRecommended';
import TitleDate from '../modules/titles/title-date/TitleDate';
import OnAir from '../modules/titles/title-icon-onair/OnAir';

// Информационный блок со списком 
import InfoBlock from '../modules/InfoBlock/wrapper/InfoBlock';
import InfoList from '../modules/InfoBlock/list/InfoList';

// Блок с котировками
import QuotesList from '../modules/quotes/list/QuotesList';

// Блок предлжения от Яндекса
import OurAppWrapper from '../modules/our-app-recommended/wrapper/OurAppWrapper';
import OurAppDescription from '../modules/our-app-recommended/description/OurAppDescription';
import OurAppImg from '../modules/our-app-recommended/img/OurAppImg';
import OurAppTitle from '../modules/our-app-recommended/title/OurAppTitle';

// Блок поиска
import MainWrSearch from '../modules/search/wrapper/MainWrSearch';
import TagSearcList from '../modules/search/tags/list/TagSearcList';
import SearchRowLogoWr from '../modules/search/row-logo/wrapper/SearchRowLogoWr';
import SearchExample from '../modules/search/example/SearchExample';

// Блок погодный информер
import Weather from '../modules/weather/weather';

// Блок баннер
import Banner from '../modules/banner/banner';

// Информация для блока с новостями
import { titleList, dataNews } from '../data/infoNews';

// Игформация для блока с котировками
import { dataQoutes } from '../data/infoQoutes';

// информация для блока предложение от Яндекс
import dataImg from '../dataImg/appImg.jpg';
import { titleApp, textApp } from '../data/infoApp';

// Информация для блока поиска
import { infoTags, infoExample } from '../data/infoSearch';
import pathImgSearch from '../dataImg/yandex_eng_logo.jpg';

// Информация для баннер
import imgBanner from '../dataImg/banner.png';

// информация для погоды 
import imgWeather from '../dataImg/weather.png';
import { dataWeather } from '../data/infoWeather';

// информация для популярное 
import { dataPop } from '../data/infoPopular';

// Информация для карта Германия
import { dataMap } from '../data/infoMap';

// Информация телепрограмма
import imgOnAir from '../dataImg/OnAir.png';
import { dataTele } from '../data/infoTele';

// Информация для эфир
import imgArrow from '../dataImg/arrow.png';
import { dataEther } from '../data/infoEther';


export default function WrapperPage() {
  return (
    <div className='wrapper-main'>
        <div className='wrapper-line-1'>
            <div className="wr-news">
                <InfoBlock>
                    <TitleInfoWrapper>
                        <TitleMain text="Сейчас в СМИ" />
                        <TitleListRecomended items={titleList}/>
                        <TitleDate date="31 июля, среда 02:32"/>
                    </TitleInfoWrapper>
                    <InfoList data={dataNews} />
                </InfoBlock>
                <QuotesList items={dataQoutes}/>
            </div>
            <div className="wr-app-recommended">
                <OurAppWrapper>
                    <OurAppImg item={{img: dataImg, alt: "some text",}}/>
                    <OurAppTitle text={titleApp} />
                    <OurAppDescription text={textApp} />
                </OurAppWrapper>
            </div>
        </div>
        <div className='wrapper-search'>
            {/* основная обертка для блока поиска с тегами лого и примером */}
            <MainWrSearch>
                <TagSearcList items={infoTags}/>
                <SearchRowLogoWr img={pathImgSearch}/>
                <SearchExample text={infoExample}/>
            </MainWrSearch>
        </div>
        <div className='wrapper-banner'>
            <Banner img={imgBanner}/>
        </div>
        <div className='wpapper-info-list'>
            <div className="wpapper-info-item">
                <Weather icon={imgWeather} data={dataWeather}>
                    <TitleMain text="Погода"/>
                </Weather>
                <InfoBlock>
                    <TitleInfoWrapper>
                        <TitleMain text="Посещаемое" />
                    </TitleInfoWrapper>
                    <InfoList data={dataPop} />
                </InfoBlock>
            </div>
            <div className="wpapper-info-item">
                <InfoBlock>
                    <TitleInfoWrapper>
                        <TitleMain text="Карта Германии" />
                    </TitleInfoWrapper>
                    <InfoList data={dataMap} />
                </InfoBlock>
                <InfoBlock>
                    <TitleInfoWrapper>
                        <TitleMain text="Телепрограмма" />
                        <OnAir img={imgOnAir} />
                    </TitleInfoWrapper>
                    <InfoList data={dataTele} />
                </InfoBlock>
            </div>
            <div className="wpapper-info-item">
                <InfoBlock>
                    <TitleInfoWrapper>
                        <TitleMain text="Эфир" />
                    </TitleInfoWrapper>
                    <InfoList icon={imgArrow} data={dataEther} />
                </InfoBlock>
            </div>
        </div>
        
    </div>
  )
}
