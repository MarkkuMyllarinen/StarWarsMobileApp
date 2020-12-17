import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function SelectRandom() {


    let image_urls = {
        'Luke Skywalker': 'http://overmental.com/wp-content/uploads/2015/08/LukeANH.jpg',
        'C-3PO': 'https://www.model-space.com/media/catalog/product/cache/1/thumbnail/1280x/9df78eab33525d08d6e5fb8d27136e95/s/s/ss2171_1500.png',
        'R2-D2': 'https://www.model-space.com/media/catalog/product/cache/1/thumbnail/1280x/9df78eab33525d08d6e5fb8d27136e95/s/s/ss2172_1500.png',
        'Darth Vader': 'https://vignette.wikia.nocookie.net/battlefront/images/0/0a/Battlefront_Vader.jpg/revision/latest?cb=20151022170631',
        'Leia Organa': 'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png/revision/latest?cb=20171224004147',
        'Owen Lars': 'http://img2.wikia.nocookie.net/__cb20070626181249/starwars/images/8/81/Owen-OP.jpg',
        'Beru Whitesun lars': 'http://vignette2.wikia.nocookie.net/disney/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20121227005055',
        'R5-D4': 'https://i.ytimg.com/vi/AtnUEjbKBx4/maxresdefault.jpg',
        'Biggs Darklighter': 'http://img2.wikia.nocookie.net/__cb20130305010406/starwars/images/0/00/BiggsHS-ANH.png',
        'Obi-Wan Kenobi': 'http://2.bp.blogspot.com/-GYsY99Ja8nM/UQ2-cM0JfxI/AAAAAAAAAJ8/hMg4rviyVn0/s1600/Obi-wan_kenobi.jpg',
        'Anakin Skywalker': 'http://img1.wikia.nocookie.net/__cb20130621175844/starwars/images/6/6f/Anakin_Skywalker_RotS.png',
        'Wilhuff Tarkin': 'https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg/revision/latest?cb=20100620213033',
        'Chewbacca': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Chewbacca-2-.jpg/220px-Chewbacca-2-.jpg',
        'Han Solo': 'https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_(1977).jpg',
        'Greedo': 'https://gamepedia.cursecdn.com/battlefront_gamepedia/3/32/Greedo.png',
        'Jabba Desilijic Tiure': 'http://images1.wikia.nocookie.net/__cb20100402071238/starwars/images/4/43/JTHAOTD-FC.jpg',
        'Wedge Antilles': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_(1977).jpg/220px-Wedge_Antilles-Denis_Lawson-Star_Wars_(1977).jpg',
        'Jek Tono Porkins': 'http://img3.wikia.nocookie.net/__cb20111104223725/starwars/images/5/53/Porkins.jpg',
        'Yoda': 'https://www.slashfilm.com/wp/wp-content/images/yoda-empire-wideeyes.jpg',
        'Palpatine': 'https://static3.therichestimages.com/wordpress/wp-content/uploads/2017/01/palpatine.jpg',
        'Boba Fett': 'http://vignette4.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png/revision/latest?cb=20161114160631',
        'IG-88': 'http://img4.wikia.nocookie.net/__cb20110127013949/starwars/images/5/56/IG-88_NEGTC.jpg',
        'Bossk': 'https://news.toyark.com/wp-content/uploads/sites/4/2017/08/Gentle-Giant-Bossk-Statue-010.jpg',
        'Lando Calrissian': 'https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg',
        'Lobot': 'https://vignette2.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg/revision/latest?cb=20160123060717',
        'Ackbar': 'http://news.toyark.com/wp-content/uploads/sites/4/2016/09/TFA-Admiral-Ackbar-Mini-Bust-001.jpg',
        'Mon Mothma': 'https://fsmedia.imgix.net/ef/b6/3e/2d/86db/44f4/8435/fa943e975257/rogue-one-a-star-wars-story-mon-mothmajpg.jpeg?dpr=2&auto=format,compress&q=75',
        'Arvel Crynyd': 'http://img2.wikia.nocookie.net/__cb20120113223349/starwars/images/d/de/Arvel-crynyd.jpg',
        'Wicket Systri Warrick': 'https://upload.wikimedia.org/wikipedia/en/e/ee/Wicket_W_Warrick.png',
        'Nien Nunb': 'https://i.ytimg.com/vi/Mwv_ktC7M9k/maxresdefault.jpg',
        'Qui-Gon Jinn': 'https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180430174809',
        'Nute Gunray': 'http://vignette4.wikia.nocookie.net/starwars/images/f/fe/Nutegunraypromo_copy.jpg/revision/latest?cb=20090417195344',
        'Finis Valorum': 'http://img3.wikia.nocookie.net/__cb20080801152355/starwars/images/8/89/Valorum.jpg',
        'Padmé Amidala': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Animagic_2009_-_Padm%C3%A9_Amidala.jpg/1200px-Animagic_2009_-_Padm%C3%A9_Amidala.jpg',
        'Jar Jar Binks': 'https://cdn.vox-cdn.com/thumbor/y0hV0NmH7bG4X6zsvgg3DiSA-UU=/0x0:1368x912/1200x800/filters:focal(0x0:1368x912)/cdn.vox-cdn.com/uploads/chorus_image/image/47830591/jjb.0.0.jpg',
        'Roos Tarpals': 'https://vignette3.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg/revision/latest?cb=20110927025354',
        'Rugor Nass': 'http://images2.wikia.nocookie.net/__cb20111105231713/starwars/images/d/d8/Bossnass.jpg',
        'Ric Olié': 'https://i.ytimg.com/vi/XT1p-GQeKSA/hqdefault.jpg',
        'Watto': 'https://upload.wikimedia.org/wikipedia/en/c/c1/Watto_EPI_TPM.png',
        'Sebulba': 'http://images2.wikia.nocookie.net/__cb20130114214431/villains/images/4/41/SEBULBA.jpg',
        'Quarsh Panaka': 'http://img1.wikia.nocookie.net/__cb20141130193801/starwars/images/0/0e/Moff_Panaka.jpg',
        'Shmi Skywalker': 'https://vignette.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg/revision/latest?cb=20171114023541',
        'Darth Maul': 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
        'Bib Fortuna': 'https://i.ytimg.com/vi/7oh-TnHnlFA/maxresdefault.jpg',
        'Ayla Secura': 'http://4.bp.blogspot.com/_xSDw5zZcWcg/TLZAymRBoJI/AAAAAAAAAAg/mBjAOtqVeqs/s1600/Aayla+Secura+Amy+Allen+%281%29.jpg',
        'Ratts Tyerel': 'http://www.toyzmag.com/wp-content/uploads/2013/01/tvc-star-wars-tpm-ratts-tyerel-4.jpg',
        'Dud Bolt': 'https://vignette2.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg/revision/latest?cb=20061130092516',
        'Gasgano': 'http://images1.wikia.nocookie.net/__cb20130211013716/starwars/images/d/d7/Gasgano_swk.jpg',
        'Ben Quadinaros': 'http://2.bp.blogspot.com/-GZlaZTBrlWg/T8fGQGGQxMI/AAAAAAAADio/bGan2R5Eb9w/s1600/788_ben02.jpg',
        'Mace Windu': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Mace_Windu.png/220px-Mace_Windu.png',
        'Ki-Adi-Mundi': 'https://imperialtalker.files.wordpress.com/2015/06/ki-adi-mundi.jpeg',
        'Kit Fisto': 'http://img2.wikia.nocookie.net/__cb20130226172434/starwars/images/0/04/Kit_Fisto_artwork_Nielsen.jpg',
        'Eeth Koth': 'http://2.bp.blogspot.com/_j6Sm3yMhiuE/Sw3NOcjxl5I/AAAAAAAAAA8/s-Ur82YkqLw/s1600/eeth+koth.jpg',
        'Adi Gallia': 'http://img4.wikia.nocookie.net/__cb20110916045741/starwars/images/thumb/0/02/AdiGallia-SWE.jpg/500px-AdiGallia-SWE.jpg',
        'Saesee Tiin': 'http://img1.wikia.nocookie.net/__cb20131112113316/starwars/images/d/da/Saesee_Tiin_TPM.png',
        'Yarael Poof': 'https://static.comicvine.com/uploads/original/11115/111155790/4607457-1584546605-yarae.jpg',
        'Plo Koon': 'https://vignette.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png/revision/latest?cb=20170927041758',
        'Mas Amedda': 'https://vignette.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/revision/latest?cb=20160630051412',
        'Gregar Typho': 'http://img3.wikia.nocookie.net/__cb20070909042751/starwars/images/thumb/7/75/Typho_CVD.jpg/500px-Typho_CVD.jpg',
        'Cordé': 'https://i.ytimg.com/vi/8wstDnWBy3A/maxresdefault.jpg',
        'Cliegg Lars': 'http://vignette2.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest?cb=20120421063121',
        'Poggle the Lesser': 'http://www.thegeekedgods.com/wp-content/uploads/2017/05/SW40-Poogle-the-lesser.png',
        'Luminara Unduli': 'http://1.bp.blogspot.com/-qlYeQClQTgg/TlT8_7R7W-I/AAAAAAAABFg/3yox0FWm_FM/s1600/luminara7.jpg',
        'Barriss Offee': 'http://vignette3.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg/revision/latest?cb=20070728014608',
        'Dormé': 'http://vignette2.wikia.nocookie.net/starwars/images/8/8b/Dorme.jpg/revision/latest?cb=20070517010621',
        'Dooku': 'http://static2.wikia.nocookie.net/__cb20121125045849/villains/images/b/b8/DOOKU.png',
        'Bail Prestor Organa': 'http://img1.wikia.nocookie.net/__cb20080823033853/starwars/images/5/50/Bail_Organa_Mug.jpg',
        'Jango Fett': 'http://news.toyark.com/wp-content/uploads/sites/4/2016/03/Black-Series-Jango-Fett-14.jpg',
        'Zam Wesell': 'https://cdn8.bigcommerce.com/s-2zs1uo/images/stencil/2048x2048/products/737/5927/ZamWesellStatue1__77021.1514505218.jpg?c=2',
        'Dexter Jettster': 'https://s3-eu-west-1.amazonaws.com/images.geeknative.com/wp-content/uploads/2012/11/01175258/Dexter-Jettster.jpg',
        'Lama Su': 'http://images3.wikia.nocookie.net/__cb20080117165737/starwars/images/7/73/Lama_Su.jpg',
        'Taun We': 'http://www.swnz.co.nz/wp-content/uploads/2007/11/renaowen02.jpg',
        'Jocasta Nu': 'https://comicnewbies.files.wordpress.com/2017/10/jocasta-nu-darth-vader-vol-2-6.jpg',
        'R4-P17': 'https://i.ytimg.com/vi/VUrtoeTmZjY/maxresdefault.jpg',
        'Wat Tambor': 'http://vignette1.wikia.nocookie.net/starwars/images/e/e8/TamborBoomHeadshot.jpg/revision/latest?cb=20090607210827',
        'San Hill': 'http://images4.wikia.nocookie.net/__cb20071003213803/starwars/images/3/3f/San.jpg',
        'Shaak Ti': 'https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/e/ee/Shaak_Ti2.jpg/revision/latest?cb=20180513025824',
        'Grievous': 'http://img3.wikia.nocookie.net/__cb20150216063039/starwars/images/7/7a/Grievous_Nielsen.jpg',
        'Tarfful': 'http://img3.wikia.nocookie.net/__cb20071230054944/starwars/images/1/1e/Tarfful.jpg',
        'Raymus Antilles': 'https://vignette.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png/revision/latest?cb=20170716200353',
        'Sly Moore': 'http://vignette4.wikia.nocookie.net/starwars/images/e/ec/SlyMooreIsWatchingYouPoop-OfficialPix.jpg/revision/latest?cb=20130913002333',
        'Tion Medon': 'https://vignette.wikia.nocookie.net/es.starwars/images/e/e8/TionMedonchron.jpg/revision/latest?cb=20110620184710'
    }
    var keys = Object.keys(image_urls);
    let random = keys[Math.floor(Math.random() * 82)]
    console.log(random)
    console.log(image_urls[random])




    let source = { uri: image_urls[random] }

    const [done, isDone] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const [subscription, setSubscription] = useState(null);

    const _slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };

    const _fast = () => {
        Accelerometer.setUpdateInterval(16);
    };

    const _subscribe = () => {
        DeviceMotion.setUpdateInterval(500)
        
        setSubscription(
            DeviceMotion.addListener(accelerometerData => {
                // console.log(accelerometerData)
                console.log(accelerometerData.rotationRate.gamma,accelerometerData.rotationRate.alpha,accelerometerData.rotationRate.beta)
                if(accelerometerData.rotationRate.gamma > 150 || accelerometerData.rotationRate.gamma < -150 ){

                    
                    setRefresh(true)
                    console.log(refresh)
                    setRefresh(false)
                    console.log(refresh)
                }
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>

            <View style={styles.bgImageWrapper}>
                <ImageBackground
                    source={require("../assets/images/starWarsBackground.png")}
                    style={styles.BGimage}
                    imageStyle={styles.image_imageStyle}
                >
                </ImageBackground>
            </View>
            <View>
                <Text style={styles.infoText}>Which character I am?</Text>
                <Image
                    source={source}
                    style={styles.image}
                ></Image>
                <Text style={{ fontSize: 30, color: "white", }}>You are  {random}</Text>
                <Text style={{ fontSize: 30, color: "white", }}>Shake to refresh!</Text>

            </View>
            <View style={styles.container}>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
    BGimage: {
        flex: 1,
        resizeMode: "stretch",
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
    image: {
        resizeMode: "stretch",
        height: 500,
    }, infoText: {
        fontSize: 30,
        color: "white",
        marginLeft: 50,
        marginTop: 10,
        paddingTop: 5,
    },
});
