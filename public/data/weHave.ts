import P1 from '../svg/p1.svg';
import P2 from '../svg/p2.svg';
import P3 from '../svg/p3.svg';

interface WeHaveTypes {
    id: string;
    title: string;
    imageUrl: string;
    subTitle: string;
};

const WeHaveData: WeHaveTypes[] = [{
    id: "truck_mounted_crane",
    title: "Truck mounted crane",
    imageUrl: P1.src,
    subTitle: "We provide wide varieties of crane on hire",
}, {
    id: "tower_crane",
    title: "Tower crane",
    imageUrl: P2.src,
    subTitle: "We provide wide varieties of crane on hire",
}, {
    id: "telescopic_crane",
    title: "Telescopic crane",
    imageUrl: P3.src,
    subTitle: "We provide wide varieties of crane on hire",
}, {
    id: "loader_crane",
    title: "Loader crane",
    imageUrl: P1.src,
    subTitle: "We provide wide varieties of crane on hire",
}, {
    id: "forklift",
    title: "Fork Lift",
    imageUrl: P2.src,
    subTitle: "We provide wide varieties of crane on hire",
}, {
    id: "electronic_crane",
    title: "Electronic crane",
    imageUrl: P3.src,
    subTitle: "We provide wide varieties of crane on hire",
}];

export default WeHaveData;