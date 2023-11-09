import {Legal} from '../components/LegalInfo';

export function PoliticsPriv() {
    const title = 'Políticas de pivacidad';
    const urlMd= 'PoliticsPriv'
    const urls = [{ name: 'Términos y condiciones', url: '/legal/terms-and-conditions' }]
    return (
        <Legal title={title} descriptionMd={urlMd} imageUrl={'/app-img-unpetlogo.PNG'} listUrls={urls}/>
    );
};

export default PoliticsPriv;