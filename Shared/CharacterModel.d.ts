// Templates 

interface ClotheTemplate {
    id: number;
    name: string;
}

//a template for any head clothe such as hats, helmets, bunny-head ,...
interface HeadClotheTemplate extends ClotheTemplate {
    hideHair: boolean;
    customEyesAnimations: boolean;
    customColor: boolean; //allows player to set color
    customEyesId: number | undefined; // if undefined use player eyes
    customMouthId: number | undefined; //if undefined use player mouth
}

interface UpperBodyClotheTemplate extends ClotheTemplate {
    customColor: boolean; //allows player to set color
}

interface LowerBodyClotheTemplate extends ClotheTemplate {
    customColor: boolean; //allows player to set color
}

declare enum AccesoryType {
    //(ie: a sword)
    BackHands,

    //(ie: a bag)
    FrontHands,

    //(ie: necklaces)
    Neck,

    //(,//ie: sunglasses)
    OverEyes,

    //(ie: ear-rings)
    OverFace,
}

interface AccesoryTemplate extends ClotheTemplate {
    accesoryType: AccesoryType;
}


// Instances 

interface ClotheInstance {

    /**
     * id that matches with
     * @see ClotheTemplate
     */
    clotheId: number;
    // undefined if Template customColor is false    
    customColorId: number | undefined;
}

interface CharacterClothes {
    head: ClotheInstance;
    upperBody: ClotheInstance;
    lowerBody: ClotheInstance;
    /**
     * ids that matches with
     * @see AccesoryTemplate
     */
    accesories: number[];
}