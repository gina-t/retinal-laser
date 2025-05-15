import { IconLink } from './IconLink';
import { Logo } from './Logo';
import { SignUp } from './SignUp';
import portrait from '../assets/portrait.jpg';

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg 
      viewBox="0 0 20 20"   
      aria-hidden="true" 
      fill="currentColor" 
      {...props}>
      <path 
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg 
      viewBox="0 0 20 20" 
      aria-hidden="true" 
      fill="currentColor" 
      {...props}>
      <path
        fillRule="evenodd"
        d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
      clipRule='evenodd'
      />
    </svg>
  );
}

export function Intro() {
  return (
    <>
      <div>
        <img 
          src={portrait} 
          alt="Dr. Gina Tsanaktsidis"
          className="ml-1 h-22 w-16 sm:h-22 sm:w-16 rounded-lg object-cover shadow-lg transition-all duration-300 hover:shadow-sky-500/30 hover:scale-[1.03]" 
        />
        
      </div>
      <h1 className="mt-14 font-display text-3xl/tight font-light text-gray-900">
        Posterior Vitreous Detachment{' '}
        <span className="text-white text-3xl/tight font-light">
          Laser Therapy to Retinal Tears
        </span>
      </h1>
      <p className="mt-4 text-base/6 text-gray-900">
        The vitreous gel occupies the central cavity of the eye and is a homogeneous structure composed of water and collagen, interspersed with a minimum of cells. From a refractive perspective, the vitreous gel should be optically empty so that light reaching the retina from the pupil is not refracted. The vitreous gel is strongly adherent posteriorly to the circular margin of the optic disc, to the macula, to the equator, to equatorial arterioles and veins, and more anteriorly to the ora serrata.
      </p>
      <p className="mt-4 text-base/6 text-gray-900">
        Due to aging, the vitreous gel undergoes a process of liquefaction and syneresis, and eventually starts separating from the posterior retina, toward the anterior retina. This process is known as a posterior vitreous detachment, and once it starts, progresses rapidly over a 24 hour period. The vitreous gel remains attached at the ora serrata but the posterior loose component floats in the vitreous cavity, producing symptoms of floaters. Floaters are commonly described as circles and lines, and may appear to be insects in your visual field. Floaters appear more prominent against brightly illuminated, uniform backgrounds, for eg. against a white wall, a bright blue or overcast sky, and against your computer screen. In about 10% of cases, the detachment of the vitreous gel from the retina causes a retinal tear. A retinal tear, if undetected, may result in a retinal detachment, because the liquid from the vitreous cavity enters through the retinal tear, and induces the retina to detach from the underlying retinal pigment epithelium.
      </p>
      <p className="mt-4 text-base/6 text-gray-900">
        If detected early, retinal tears can be treated with laser therapy, or cryotherapy if the tear is not amenable to laser due to its position or due to a poor view from vitreous haemorrage. Laser therapy to a retinal tear is depicted in the adjacent animation.
      </p>
      <p className="mt-4 text-base/6 text-gray-900">
        Laser therapy to a retinal tear applies very discrete coherent light from a laser crystal to the edges of the retinal tear, typically as contiguous spots, in 3 concentric rows. The laser spots initially appear white, and with histological changes become dark grey, brown, or black. The laser spots eventually form a histological adhesion around the edges of the retinal tear, such that liquid from the vitreous cavity can not enter the subretinal space.
      </p>
      <p className="mt-4 text-base/6 text-gray-900">
        Laser therapy only treats the retinal tear, and not the floaters. The floaters are due to the floating liquefied vitreous gel, and haemorrage or red blood cells and clots in the vitreous gel. The red blood cells are removed by your own immune system, for eg. macrophage cells remove debris from the vitreous gel. The floaters that are secondary to the loose, floating gel are not removed by macrophages. These fibrose over time but persist, and a process of neural adapation occurs after 6 weeks, so that floaters initially perceived quite dramatically, are no longer as prominent and annoying. I like to describe floaters appearing as windscreen wipers as you drive your car. Although you are aware of the windcsreen wipers, you as the driver still see perfectly in the distance.
      </p>
      <p className="mt-4 text-base/6 text-gray-900">
        Laser therapy is performed in the outpatient setting. After dilating the pupil maximally, topical anaesthetic is applied. You are seated at the slit lamp laser, and focus your gaze on an external target. A 3-mirror contact lens is applied to the cornea, and the retinal tear brought into the opthalmologist's focused view. Contiguous laser spots are applied to the edges of the tear, usually in 3 neat rows. There is usually no pain. After the procedure your ophthalmologist will advise you not to drive or to return to work that day, and not to lift more than 20kg for about 2 weeks post laser therapy. 
      </p>
     
      <SignUp />

      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink 
          to="https://www.linkedin.com/in/dr-gina-tsanaktsidis-072020b8" 
          icon={LinkedInIcon} 
          className="flex-none"
        >
          LinkedIn
        </IconLink>

        <IconLink to="https://github.com/gina-t" 
        icon={GitHubIcon} 
        className="flex-none"
        >
          GitHub
        </IconLink>
      </div>
    </>
  );
}

export function IntroFooter() {
  return (
    <p className="flex items-center gap-x-2 text-[0.9125rem]/6 text-gray-900">
      Brought to you by{' '}
        <Logo className="inline-block w-auto" />   
        <span className="text-[0.9125rem]/6 text-gray-900 hover:text-white transition">
          Dr Gina Tsanaktsidis  
        </span>
          
    </p>
  );
}
