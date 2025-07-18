"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from "next/image";
import Header from '../components/Header'
import Footer from '../components/Footer'

import { outfit, inter } from '../fonts';
import Bonding from '../../../public/services/Bonding.jpg';
import Veneers from '../../../public/services/Veneers.jpg';
import Implant from '../../../public/services/Implant.jpg';

// Reusable Tailwind CSS class constants (from your original Services.tsx)
const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';
const sectionTitleContainerClasses = 'py-6 lg:py-18';
const sectionTitleClasses = 'text-5xl lg:text-7xl lg:py-8 px-8 lg:px-12 py-8 rounded-4xl';
const servicesListContainerClasses = 'py-0 space-y-4 lg:space-y-12';
const serviceBlockClasses = 'lg:pl-12 lg:pr-12 pt-8 pb-6 lg:pt-12 lg:pb-12 px-8 rounded-4xl bg-[#12507B] lg:flex';
const serviceTitleClasses = 'text-5xl lg:text-6xl lg:w-1/4 lg:text-end pr-8 mb-4 lg:mb-0';
const serviceDescriptionWrapperClasses = 'lg:w-3/4 pb-0 lg:pb-0';

// Helper function to calculate threshold (can be kept outside component for purity)
const getThresholds = (triggerPixels: number, sectionHeight: number): number => {
    return Math.min(1, Math.max(0, triggerPixels / sectionHeight));
};

// Define a type for your section data for clarity
interface SectionData {
    id: string;
    color: string;
    text: string;
    height: number;
    triggerPixels: number;
    order: number;
}

// Define a type for what we store in intersectingSections.current
interface IntersectingSectionInfo {
    id: string;
    ratio: number;
    color: string;
    order: number;
}

// AccordionText Component
interface AccordionTextProps {
    children: React.ReactNode;
    initialHeightPx?: number; // Prop to control initial visible height in pixels
    id: string; // Unique ID for each accordion instance
}

const AccordionText: React.FC<AccordionTextProps> = ({ children, initialHeightPx = 140, id }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Effect to determine if it's a mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // Adjust this breakpoint to match your 'lg:' breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Effect to check for content overflow and set button visibility
    useEffect(() => {
        if (contentRef.current && isMobile) {
            const contentOverflows = contentRef.current.scrollHeight > initialHeightPx;
            setShowButton(contentOverflows);
            // On mobile, if content overflows, default to collapsed. Otherwise, always expanded.
            setIsExpanded(!contentOverflows);
        } else if (!isMobile) {
            // Always expanded on desktop
            setIsExpanded(true);
            setShowButton(false); // No button needed on desktop
        }
    }, [children, initialHeightPx, isMobile]);

    // Calculate dynamic max-height for the content container only
    const contentMaxHeight = isMobile && !isExpanded ? `${initialHeightPx}px` : 'none';

    return (
        <div className={`
            relative transition-all duration-300 ease-in-out
            text-lg lg:text-xl font-light ${inter.className}
            pb-0 pt-2
        `}>
            <div
                ref={contentRef}
                className="transition-all duration-300 ease-in-out relative"
                style={{
                    maxHeight: contentMaxHeight,
                    overflow: isMobile && !isExpanded ? 'hidden' : 'visible',
                }}
            >
                {children}

                {isMobile && showButton && !isExpanded && (
                    <div className="
                        absolute bottom-0 left-0 w-full h-[100px]
                        bg-gradient-to-t from-[#12507B] to-transparent
                        pointer-events-none z-0
                    "></div>
                )}
            </div>

            {isMobile && showButton && (
                <div className="
                    w-full flex justify-center pt-2 z-10
                ">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="pt-1 text-gray-300 flex items-center justify-center"
                    >
                        {isExpanded ? <ChevronUp size={24} className='w-[46px] h-[46px]' /> : <ChevronDown size={24} className='w-[46px] h-[46px]' />}
                    </button>
                </div>
            )}
        </div>
    );
};

// Main Services Component
function Services() {
    const [currentPageBackgroundColor, setCurrentPageBackgroundColor] = useState<string>('#5AA4AE');

    // Create individual refs for each section
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);
    const section5Ref = useRef<HTMLDivElement>(null);

    // Use a ref to store the current intersection status of each section
    const intersectingSections = useRef<Record<string, IntersectingSectionInfo>>({});

    // Helper to get section data by ID
    const getSectionConfig = (id: string): SectionData | undefined => {
        switch (id) {
            case 'section1': return { id: 'section1', color: '#EBEEE8', text: 'Teal', height: 320, triggerPixels: 250, order: 0 }; // CHANGED triggerPixels from 500 to 250
            case 'section2': return { id: 'section2', color: '#EBEEE8', text: 'Deep Blue', height: 2250, triggerPixels: 500, order: 1 };
            case 'section3': return { id: 'section3', color: '#BED2BB', text: 'Windows 98 Teal', height: 2000, triggerPixels: 500, order: 2 };
            case 'section4': return { id: 'section4', color: '#D3CCD6', text: 'Green', height: 2200, triggerPixels: 500, order: 3 };
            case 'section5': return { id: 'section5', color: '#EBEDDF', text: 'Light Gray', height: 2200, triggerPixels: 500, order: 4 };
            default: return undefined;
        }
    };

    useEffect(() => {
        const thresholdArray = Array.from({ length: 101 }, (_, i) => i / 100);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const sectionId = entry.target.id;
                const sectionData = getSectionConfig(sectionId);

                if (!sectionData) {
                    console.warn(`Section data not found for ID: ${sectionId}`);
                    return;
                }

                if (entry.isIntersecting) {
                    intersectingSections.current[sectionId] = {
                        id: sectionId,
                        ratio: entry.intersectionRatio,
                        color: sectionData.color,
                        order: sectionData.order
                    };
                } else {
                    delete intersectingSections.current[sectionId];
                }
            });

            const activeSections = Object.values(intersectingSections.current);

            if (activeSections.length === 0) {
                return;
            }

            activeSections.sort((a, b) => a.order - b.order);

            let dominantSectionCandidate: IntersectingSectionInfo | null = null;

            activeSections.forEach(section => {
                const originalSectionData = getSectionConfig(section.id);
                if (!originalSectionData) return;

                const triggerThreshold = getThresholds(originalSectionData.triggerPixels, originalSectionData.height);

                if (section.ratio >= triggerThreshold) {
                    if (!dominantSectionCandidate ||
                        section.ratio > dominantSectionCandidate.ratio ||
                        (section.ratio === dominantSectionCandidate.ratio && section.order < dominantSectionCandidate.order)) {
                        dominantSectionCandidate = section;
                    }
                }
            });

            // Fallback: If no section explicitly meets its trigger threshold, pick the one with the highest ratio
            if (!dominantSectionCandidate && activeSections.length > 0) {
                activeSections.forEach(section => {
                    if (!dominantSectionCandidate ||
                        section.ratio > dominantSectionCandidate.ratio ||
                        (section.ratio === dominantSectionCandidate.ratio && section.order < dominantSectionCandidate.order)) {
                        dominantSectionCandidate = section;
                    }
                });
            }

            if (dominantSectionCandidate !== null) {
                const finalDominantSection = dominantSectionCandidate as IntersectingSectionInfo;

                if (currentPageBackgroundColor !== finalDominantSection.color) {
                    setCurrentPageBackgroundColor(finalDominantSection.color);
                    document.body.style.backgroundColor = finalDominantSection.color;
                }
            }

        }, {
            root: null,
            rootMargin: '0px',
            threshold: thresholdArray,
        });

        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);
        if (section4Ref.current) observer.observe(section4Ref.current);
        if (section5Ref.current) observer.observe(section5Ref.current);

        return () => {
            observer.disconnect();
            document.body.style.backgroundColor = '#5AA4AE'; // Reset background on unmount
        };
    }, []);

    return (
        <div className={`${outfit.className} text-white`}>
            <Header/>
            {/* Hero Section */}
            <div id="section1" ref={section1Ref} className='w-full bg-[#5DA39D] pb-6 lg:pb-0'>
                <div className={`${sectionWrapperClasses} lg:pb-18 lg:pt-6`}>
                    <div className='text-lg lg:text-4xl text-gray-50'>Dr. Wai-man Lam & Associates</div>
                    <div className='text-4xl lg:text-9xl lg:mb-4 pb-4 lg:pb-0'>Our Services</div>
                    <div className={`text-xl lg:text-2xl font-light mt-0 lg:mt-12  lg:py-12 px-8 lg:px-24 py-8 rounded-4xl bg-[#12507B] `}>
                        Here at Dr. Lam&apos;s Dental Office, we provide a comprehensive range of dental services for you and your family - from the youngest child to the great grandparent.
                        <div className='list-disc pl-0 lg:pl-12 lg:mt-6 '>
                            <li>You are never too old to have healthy teeth and gums.</li>
                            <li>You are never old enough to stop seeing your dentist!</li>
                            <li>We want to make sure you maintain healthy teeth and gums for your whole life.</li>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cosmetic Dentistry Section */}
            <div id="section2" ref={section2Ref}>
                <div className={`${sectionWrapperClasses} ${sectionTitleContainerClasses}`}>
                    <div className={`${sectionTitleClasses} bg-[#EBEEE8] text-[#003460]`}>Cosmetic Dentistry</div>
                </div>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Pinhole Surgical Technique</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="pinhole-description">
                                If you have receding gums there is now a revolutionary new treatment method available. Dr. Wai Man Lam offers the Pinhole Surgical Technique™ as a noninvasive treatment option for patients with receding gums. There is no cutting, no sutures, and no second surgical site. It is the less invasive alternative to traditional receding gums surgery.
                                <br />
                                The “breakthrough” Pinhole Surgical Technique™ was invented and patented by Dr. John Chao and it is changing the way gum recession is treated. PST™ is an incision-free procedure where a very small hole is created in your gums, then special instruments are used to loosen the gum tissue and move it over the areas where there is not enough tissue. Many patients are surprised at how easy the procedure is and see a visible change the very same day!
                            </AccordionText>
                        </div>
                    </div>

                    <div className={`lg:pl-12 lg:pr-12 pt-8 pb-6 lg:pt-12 lg:pb-12 px-8 rounded-4xl bg-[#12507B]`}>
                        <div className={`text-5xl lg:text-6xl lg:w-1/4 lg:text-start pr-8 mb-4 lg:mb-4`}>Bonding</div>
                        <div className={`lg:flex lg:space-x-6 `}>
                            <div className='lg:w-2/5 my-4 lg:my-0 flex items-center lg:mt-1'>
                                <div className=''>
                                    <Image
                                        src={Bonding}
                                        alt="Dental Bonding"
                                        className="w-full 2xl:w-[450px] rounded-4xl"
                                    />
                                </div>
                            </div>
                            <div className='lg:w-3/5 flex items-center'>
                                <AccordionText initialHeightPx={140} id="bonding-description">
                                    Bonding is a conservative way to repair slightly chipped, discolored, or crooked teeth. During dental bonding, a white filling is placed onto your tooth to improve its appearance. The filling &quot;bonds&quot; with your teeth, and because it comes in a variety of tooth-colored shades it closely matches the appearance of your natural teeth.
                                    <br />
                                    Tooth bonding can also be used for teeth fillings instead of amalgam fillings. Many patients prefer bonding fillings because the white color is much less noticeable than the silver amalgam fillings. Bonding fillings can be used on front and back teeth depending on the location and extent of tooth decay.
                                    <br />
                                    Bonding is less expensive than other cosmetic treatments and usually can be completed in one visit to our office. However, bonding can stain and is easier to break than other cosmetic treatments such as porcelain veneers. If it does break or chip, tell your doctor. The bonding can generally be easily patched or repaired in one visit.
                                </AccordionText>
                            </div>
                        </div>
                    </div>

                    <div className={`lg:pl-12 lg:pr-12 pt-8 pb-6 lg:pt-12 lg:pb-12 px-8 rounded-4xl bg-[#12507B]`}>
                        <div className={`text-5xl lg:text-6xl lg:w-1/4 lg:text-start pr-8 mb-4 lg:mb-4`}>Implants</div>
                        <div className={`lg:flex lg:space-x-6`}>
                            <div className='lg:w-2/5 my-4 lg:my-0 flex justify-end items-center lg:mt-1'>
                                <div>
                                    <Image
                                        src={Implant}
                                        alt="Dental Implants"
                                        className="w-full 2xl:w-[450px] rounded-4xl"
                                    />
                                </div>
                            </div>
                            <div className='lg:w-3/5 flex items-center'>
                                <AccordionText initialHeightPx={140} id="implants-description">
                                    If you have missing teeth, it is crucial to replace them. Without all your teeth, chewing and eating can destabilize your bite and cause you discomfort. When teeth are missing, your mouth can shift and even cause your face to look older. Implants are a great way to replace your missing teeth.
                                    <br />
                                    An implant is a new tooth made of steel and porcelain that looks just like your natural tooth. Your implant is composed of two parts that mimic a tooth&apos;s root and crown. The implant&apos;s &quot;root&quot; is a titanium steel rod placed into the jaw bone to act as a root. Once the rod is in place, a porcelain crown is attached to replace the top part of your tooth.
                                    <br />
                                    Implants may also be used to anchor dentures, especially lower dentures that tend to shift when you talk or chew. Plus, for patients with removable partial dentures, implants can replace missing teeth so that you have a more natural-looking smile.
                                </AccordionText>
                            </div>
                        </div>
                    </div>

                    <div className={`lg:pl-12 lg:pr-12 pt-8 pb-6 lg:pt-12 lg:pb-12 px-8 rounded-4xl bg-[#12507B]`}>
                        <div className={`text-5xl lg:text-6xl lg:w-1/4 lg:text-start pr-8 mb-4 lg:mb-4`}>Veneers</div>
                        <div className={`lg:flex lg:space-x-6 `}>
                            <div className='lg:w-2/5 my-4 lg:my-0 flex items-center lg:mt-1'>
                                <div>
                                    <Image
                                        src={Veneers}
                                        alt="Dental Veneers"
                                        className="w-full 2xl:w-[450px] rounded-4xl"
                                    />
                                </div>
                            </div>
                            <div className='lg:w-3/5 flex items-end'>
                                <AccordionText initialHeightPx={140} id="veneers-description">
                                    There&apos;s no reason to put up with gaps in your teeth or with teeth that are stained, discolored, badly shaped, chipped, or crooked. Today, a veneer placed on top of your teeth can correct nature&apos;s mistake or the results of an injury and help you have a beautiful smile. Veneers are a highly popular solution among dental patients because of their lifelike tooth appearance.
                                    <br />
                                    Veneers are thin, custom-made shells crafted of tooth-colored materials (such as porcelain) designed to cover the front side of your teeth. To prepare for veneers, your doctor will create a unique model of your teeth. This model is sent to the dental technician to create your veneers. Before placing your new veneer, your doctor will remove a small amount of your tooth to make room for the veneer.
                                    <br />
                                    When placed, you&apos;ll be pleased to see that veneers look like your natural teeth and even resist staining. Though veneers are stain resistant, your doctor may recommend that you avoid coffee, tea, red wine, and tobacco to maintain the beauty of your veneer.
                                </AccordionText>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* General Dentistry Section */}
            <div id="section3" ref={section3Ref}>
                <div className={`${sectionWrapperClasses} ${sectionTitleContainerClasses}`}>
                    <div className={`${sectionTitleClasses} bg-[#BED2BB] text-[#003460]`}>General</div>
                </div>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Crowns</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="crowns-description">
                                Crowns are a cosmetic restoration used to improve your tooth&apos;s shape or to strengthen a tooth. Crowns are most often used for teeth that are broken, worn, or have portions destroyed by tooth decay.
                                <br />
                                Crowns are &quot;caps&quot; cemented onto an existing tooth which fully cover the portion of your tooth above the gum line. In effect, the crown becomes your tooth&apos;s new outer surface. Crowns can be made of porcelain, metal, or both. Porcelain crowns are most often preferred because they mimic the translucency of natural teeth and are very strong.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Bridges</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="bridges-description">
                                A bridge may be used to replace missing teeth, help maintain the shape of your face, and alleviate stress in your bite.
                                <br />
                                A bridge replaces missing teeth with artificial teeth, looks great, and literally bridges the gap where one or more teeth may have been. Your bridge can be made from gold, alloys, porcelain, or a combination of these materials and is bonded onto surrounding teeth for support.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Fillings</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="fillings-description">
                                Made of a mixture of plastic and acrylic materials, composite restorations have a natural tooth-like appearance and can be used on all teeth. Composite fillings bond directly to the tooth structure, reducing the risk of leakage. The aesthetically pleasing tooth is restored to its original function.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Root Canal</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="root-canal-description">
                                Primary root canal is a procedure that extracts decayed pulp from the central part of the tooth, reshapes the canal and replaces it with strengthening filler.
                                <br />
                                A cavity is the result of superficial decay of the enamel of the tooth. Left long enough, this decay can burrow into the deeper reaches of the tooth, causing extensive damage to tooth structure. When the damage goes beyond what can be treated with a filling, dentists can perform a root canal (or endodontics), preserving the tooth and retaining its original integrity; thereby, saving a tooth that in the past would have to have been pulled. teeth are important for several reasons. Foremost, good teeth allow a child to eat and maintain good nutrition. Healthy teeth allow for clear pronunciation and speech habits. The self-image that healthy teeth give a child is immeasurable. Primary teeth also guide eruption of the permanent teeth.
                            </AccordionText>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preventive Oral Section */}
            <div id="section4" ref={section4Ref}>
                <div className={`${sectionWrapperClasses} ${sectionTitleContainerClasses}`}>
                    <div className={`${sectionTitleClasses} bg-[#D3CCD6] text-[#003460]`}>Preventive Oral</div>
                </div>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                    <div className={serviceBlockClasses}>
                        <div className={`text-4xl lg:text-6xl lg:w-2/5 lg:text-end pr-8 mb-4 lg:mb-0`}>Tooth Decay Prevention</div>
                        <div className={`lg:w-3/5`}>
                            <AccordionText initialHeightPx={140} id="decay-prevention-description">
                                During a preventive care visit, our dentist or dental hygienist will examine your teeth for signs of decay. The hygienist, who specializes in the cleaning and maintenance of teeth and gums, will remove any tartar, hardened plaque also known as calculus that has accumulated on your teeth.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Scaling</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="scaling-description">
                                This process involves cleaning the crown of the tooth and below the gum line where plaque is often trapped. Our hygienist will polish your teeth after they are scaled. Children under 18 years of age will have fluoride applied to their teeth at the end of their visit.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={`text-4xl lg:text-6xl lg:w-2/5 lg:text-end pr-8 mb-4 lg:mb-0`}>Home Care and Proper Brushing Techniques</div>
                        <div className={`lg:w-3/5`}>
                            <AccordionText initialHeightPx={140} id="brushing-techniques-description">
                                At the end of a preventive care appointment, your dentist or hygienist will instruct you to follow proper home care and brushing techniques. If required, your dentist will also perform a final examination before you leave.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={`text-4xl lg:text-6xl lg:w-2/5 lg:text-end pr-8 mb-4 lg:mb-0`}>Custom Mouth-guards should be a part of every Athlete&apos;s Equipment</div>
                        <div className={`lg:w-3/5`}>
                            <AccordionText initialHeightPx={140} id="mouthguards-description">
                                Wearing a Mouthguard is an important precaution for athletes of all ages and abilities, helping to protect against chipped or broken teeth, root and bone damage, and tooth loss. Mouthguards also safeguard against serious injuries such as jaw fracture, cerebral hemorrhage, concussion and neck injuries by helping to avoid situations where the lower jaw jams into the upper jaw. By keeping soft tissue in the mouth away from the teeth, Mouthguards help prevent cutting and bruising of the lips, tongue and cheeks, especially for athletes who wear orthodontic appliances.
                            </AccordionText>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dentistry for Kids Section */}
            <div id="section5" ref={section5Ref} className='pb-18'>
                <div className={`${sectionWrapperClasses} ${sectionTitleContainerClasses}`}>
                    <div className={`${sectionTitleClasses} bg-[#EBEDDF] text-[#003460]`}>Dentistry for Kids</div>
                </div>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>A Child&apos;s First Dental Visit</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="first-visit-description">
                                A child&apos;s first dental visit should be scheduled around his/her first birthday. The most important part of the visit is getting to know and becoming comfortable with a doctor and his staff. A pleasant, comfortable first visit builds trust and helps put the child at ease during future dental visits. If possible, allow the child to sit in a parent&apos;s lap in the exam room. Children should be encouraged to discuss any fears or anxiety they feel.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Teething</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="teething-description">
                                Normally the first tooth erupts between ages 6 to 12 months. Gums are sore, tender and sometimes irritable until the age of 3. Rubbing sore gums gently with a clean finger, the back of a cold spoon or a cold, wet cloth helps soothe the gums. Teething rings work well, but avoid teething biscuits—they contain sugar that is not good for baby teeth.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Infants New Teeth</div>
                        <div className={serviceDescriptionWrapperClasses}>
                            <AccordionText initialHeightPx={140} id="infant-new-teeth-description">
                                The primary, or &quot;baby&quot; teeth play a crucial role in dental development. Without them, a child cannot chew food properly and has difficulty speaking clearly. Primary teeth are vital to development of the jaws and for guiding the permanent (secondary) teeth into place when they replace the primary teeth around age 6.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={`text-4xl lg:text-6xl lg:w-2/5 lg:text-end pr-8 mb-4 lg:mb-0`}>Why Primary Teeth Are Important</div>
                        <div className={`lg:w-3/5`}>
                            <AccordionText initialHeightPx={140} id="primary-teeth-important-description">
                                Primary teeth are important for several reasons. Foremost, good teeth allow a child to eat and maintain good nutrition. Healthy teeth allow for clear pronunciation and speech habits. The self-image that healthy teeth give a child is immeasurable. Primary teeth also guide eruption of the permanent teeth.
                            </AccordionText>
                        </div>
                    </div>

                    <div className={serviceBlockClasses}>
                        <div className={serviceTitleClasses}>Infant Tooth Eruption</div>
                        <div className={`${serviceDescriptionWrapperClasses}`}>
                            <AccordionText initialHeightPx={140} id="tooth-eruption-description">
                                A child&apos;s teeth actually start forming before birth. As early as 4 months of age, the primary or &quot;baby&quot; teeth push through the gums—lower central incisors are first, then the upper central incisors. The remainder of the 20 primary teeth typically erupt by age 3, but the place and order varies.
                            </AccordionText>
                        </div>
                    </div>
                </div>
            </div>



            {/* Global styles for smooth transition */}
            <style jsx global>{`
                body {
                    background-color: #5AA4AE; /* This was correctly set from previous steps */
                    transition: background-color 0.8s ease-in-out;
                }
            `}</style>

            <Footer/>
        </div>
    );
}

export default Services;