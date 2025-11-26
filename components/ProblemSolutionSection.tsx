import ClickSpark from "./ClickSpark";
import GradientText from "./GradientText";
import SpotlightCard from "./SpotlightCard";

const ProblemSolutionSection = ({ className = "", id = "" }) => {
  return (
    <ClickSpark
      sparkColor="#111"
      sparkSize={10}
      sparkRadius={25}
      sparkCount={8}
      duration={400}
    >
      <div id={id}>
        <div
          className={`w-full h-screen flex items-center justify-center gap-x-24 text-gray-100  pt-20 ${className}`}
        >
          {/* <Image
          src="/image.jpg"
          alt="Background gradient"
          width={1920}
          height={1080}
          draggable={false}
          className="absolute z-1- object-cover scale-[1.4] translate-x-[15%] translate-y-[10%]"
        /> */}
          <SpotlightCard
            className="custom-spotlight-card w-1/3 h-3/4 flex flex-col px-10 pt-8 gap-4 shadow-lg border-[#4079ff]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="text-4xl font-semibold">
              The Problem — why choose
              <GradientText
                colors={["#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class inline"
              >
                UzMedicare
              </GradientText>
              ?
            </h1>
            <p className="text-lg">
              O'zbekistonda aqlli soatlar keng tarqalganiga qaramay, ularning
              sog'liq ma'lumotlari mahalliy tibbiyot tizimlariga
              integratsiyalanmagan. Natijada shifokorlar bemorning real vaqt
              holatini bilmaydi, trendlar yo'q va favqulodda hollarda
              ogohlantirish tizimi ishlamaydi.
            </p>
            <h2 className="text-2xl font-semibold pt-4">The disadvantages</h2>
            <ul className="list-disc pl-10 text-lg">
              <li>Real-time monitoring va alertlar yo'q</li>
              <li>Data shifokorlar uchun foydalanishga mos emas</li>
              <li>Trendlar va 7/30/90 kunlik tarix yo'q</li>
              <li>
                Data xavfsizligi va mahalliy hosting bilan bog'liq savollar
              </li>
            </ul>
            <h2 className="text-2xl font-semibold">Our legal/local aspects</h2>
            <p className="text-lg text-gray-300">
              Mahalliy serverlar, o'zbek tilida interpretatsiya, poliklinika
              integratsiyasi — bu startapni bozorda noyob qiladi va mahalliy
              regulator talablariga moslashadi.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card w-1/3 h-3/4 flex flex-col px-10 pt-8 gap-4 shadow-lg border-[#40ffaa]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="text-4xl font-semibold">
              The Solution —{" "}
              <GradientText
                colors={["#40ffaa", "#4079ff"]}
                animationSpeed={10}
                showBorder={false}
                className="custom-class inline"
              >
                UzMedicare
              </GradientText>
              's unique features
            </h1>
            <p className="text-xl">
              UzMediaCare — ma'lumotni yig'ishdan tashqari uni tibbiy darajada
              tahlil qiladigan, klinikalarga integratsiyalangan va
              cybersecurity-first tamoyillari asosida ishlab chiqilgan
              platforma.
            </p>
            <ul className="list-disc pl-10 pt-4">
              <li>
                <p className="text-lg">
                  {" "}
                  <span className="font-semibold">
                    Smartwatch → UzMed API → Clinic Sync:
                  </span>{" "}
                  Apple HealthKit, Garmin, Whoop, Fitbit va Samsung
                  ma'lumotlarini poliklinika EHRlariga uzatamiz.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  {" "}
                  <span className="font-semibold">Real-time Alerts:</span> AI
                  anomaliya aniqlagach, oila a'zolari, tez yordam va klinika
                  bildiriladi.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  {" "}
                  <span className="font-semibold">
                    AI Health Interpreter (o'zbek tilida):
                  </span>{" "}
                  murakkab metrikalarni oddiy tavsiyalarga aylantiradi.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  <span className="font-semibold">Trend & Prognosis:</span>{" "}
                  7/30/90 kunlik trendlar va qisqa muddatli yurak urishi
                  prediksiya modullari.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  <span className="font-semibold">
                    Zero-Trust & Local Hosting:
                  </span>{" "}
                  mahalliy serverlarda shifrlangan saqlash, rollarga asoslangan
                  kirish va audit loglar.
                </p>
              </li>
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </ClickSpark>
  );
};

export default ProblemSolutionSection;
