import organic from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/organic.png';
import vegg from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/vegan.png';
import cooking from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cooking.png';

export default function Features() {
    return (
        <div className="bg-blue-botton rounded-3xl">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 rounded-b-xl">
                    <div className="col-span-1 flex justify relative">
                        <img className="h-12" src={organic} alt="Organic" />
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Natural</span>
                    </div>
                    <div className="col-span-1 flex justify relative">
                        <img className="h-12" src={vegg} alt="Vegg" />
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Vegano</span>
                    </div>
                    <div className="col-span-1 flex justify relative">
                        <img className="h-12" src={cooking} alt="Cooking" />
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Sabor Casero</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
