import {Legal} from '../components/LegalInfo';

export function TermsCond() {
    const title = 'Términos y Condiciones';
    const urlMd= 'TermsCond'
    const urls = [{ name: 'Políticas de privacidad', url: '/legal/privacy-policies' }]
    return (
        <Legal title={title} descriptionMd={urlMd} imageUrl={'/app-img-unpetlogo.PNG'} listUrls={urls}/>
    );
};

export default TermsCond;
