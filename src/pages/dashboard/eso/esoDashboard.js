import DashboardCard from '@/components/cards/DashboardCard';
import useStore from '@/store/store';
import inquiriesImage from '../../../assets/images/esoInquiry.png';
import careerCounselingImage from '../../../assets/images/careercounseling.png';
import degreePathwaysImage from '../../../assets/images/degreepathways.png';

const cards = [
    {
        title: "ESO Inquiries",
        description: "Manage service member inquiries, update service member profiles",
        buttonLabel: "Go to ESO Inquiries",
        image: inquiriesImage,
        routePath:"eso/inquiries"
    },
    {
        title: "Degree Pathways Catalog",
        description: "View degree pathway options: by school, major or MOS code ",
        buttonLabel: "Go to Degree Pathways",
        image: degreePathwaysImage,
        routePath:"eso/degreePathways"
    },
    {
        title: "Career Counseling",
        description: "Assist service memeber in career counseling and view service member transcripts",
        buttonLabel: "Go to Career Counseling",
        image: careerCounselingImage,
        routePath:"eso/careerCounseling"
    },
]

export default function ESODashboard() {
    const userData = useStore((state) => state.userData);
    return (
        <div className='w-full'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    ESO Dashboard
                </div> 
            </h1>
            <div className="flex flex-row gap-20 px-10 justify-center">
                {cards.map((card, index) => {
                    return(
                        <div className=''>
                        <DashboardCard key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} dashboardImage={card.image} routePath={card.routePath}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}