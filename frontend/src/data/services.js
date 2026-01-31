export const servicesData = {
  tooling: {
    id: 'tooling',
    title: 'Tooling',
    subtitle: 'Preferred Tooling Vendor for OEMs Globally',
    bannerImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=800&q=80',
    description: 'Eurospec is a preferred tooling vendor for OEMs globally, specializing in progressive dies, transfer dies, and line dies. Our in-house capabilities ensure precision, quality, and timely delivery.',
  },
  manufacturing: {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Full-Service Automotive Manufacturing',
    bannerImage: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    description: 'Our manufacturing facilities feature state-of-the-art mechanical presses and automated systems, producing over 60 million components annually for the automotive industry.',
  },
  design: {
    id: 'design',
    title: 'Design & Development',
    subtitle: 'Complete In-House Engineering Capabilities',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Our full-service engineering department provides CAD design, CAE analysis, prototyping, and validation services using industry-leading software and technologies.',
  },
  capabilities: {
    id: 'capabilities',
    title: 'Capabilities',
    subtitle: 'Advanced Materials & Process Expertise',
    bannerImage: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80',
    description: 'With four decades of experience, we have developed extensive expertise in working with advanced automotive materials and complex manufacturing processes.',
  },
  assembly: {
    id: 'assembly',
    title: 'Assembly',
    subtitle: 'Complex Automotive Sub-Assemblies',
    bannerImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
    description: 'We specialize in manufacturing complex sub-assemblies for automotive seating, body-in-white, and chassis systems for major OEM platforms.',
  },
  innovation: {
    id: 'innovation',
    title: 'Innovation',
    subtitle: 'Advanced Simulation & Analysis',
    bannerImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    description: 'Our engineering team utilizes advanced forming simulations and analysis tools to optimize designs, reduce development time, and ensure first-time quality.',
  },
};

export const serviceFeatures = {
  tooling: [
    'Progressive Die Design & Build up to 180 inches',
    '60,000 pounds of lifting capacity',
    'Transfer Die: Hand Transfer, Mechanical Tooling',
    'In-Die processes: Tapping, Insertion of stake nuts & rivets',
    'In-house Tool Try-out and Tool Certification',
  ],
  manufacturing: [
    'Mechanical Presses: 300-1500 tons',
    'Fully Automated Assemblies',
    'Riveting & Staking',
    'Projection Welding & Spot Welding',
    'Robotic MIG Welding',
    'Coatings',
  ],
  design: [
    'CATIA V5 R20',
    'UniGraphics NX10',
    'SolidWorks 2015',
    'LS DynaForm 5.2',
    'Mastercam X9',
    'FTI - Fastform',
    'NX Design & CNC',
  ],
  capabilities: [
    'HSLA ranging from 340MPa-550MPa',
    'Dual Phase up to 140 KSI (1000MPa)',
    'Material thickness: 1mm – 8mm',
    'Draw Quality steels',
    'Non-ferrous materials',
  ],
  assembly: [
    'Seat Systems / Frames and Structures',
    'Body in White & Chassis Systems',
    'Interior / Exterior System Assemblies',
    'Seat Recliner Mechanisms',
    'Seat Track Mechanisms',
    'Child Restraint Assemblies',
  ],
  innovation: [
    'Forming Limit Design',
    'Material Thinning Analysis',
    'Strip Layout Optimization',
    'Die Design Simulation',
    'Metal Forming Simulation',
  ],
};

export const serviceSections = {
  tooling: [
    {
      title: 'Progressive Die Design & Build',
      items: ['Up to 180 inches in length', '60,000 pounds of lifting capacity', 'Complex multi-station designs', 'High-speed production capability'],
    },
    {
      title: 'Transfer Die Design & Build',
      items: ['Hand Transfer systems', 'Mechanical Tooling', 'Transfer Bars & Fingers', 'Progressive to Transfer conversions'],
    },
    {
      title: 'In-Die Processes',
      items: ['Tapping operations', 'Insertion of stake nuts & rivets', 'In-die nut piercing', 'Multi-operation integration'],
    },
    {
      title: 'Material Capabilities',
      items: ['HSLA ranging from 340MPa-550MPa', 'Dual Phase up to 140 KSI (1000MPa)', '1mm – 8mm thick material depending on type', 'Various steel grades and specifications'],
    },
  ],
  manufacturing: [
    {
      title: 'Press Capabilities',
      items: ['Mechanical Presses: 300-1500 tons', 'High-volume production lines', 'Precision stamping operations', 'Multi-station progressive dies'],
    },
    {
      title: 'Welding Processes',
      items: ['Projection Welding', 'Spot Welding', 'Robotic MIG Welding', 'Custom weld fixtures'],
    },
    {
      title: 'Assembly Operations',
      items: ['Fully Automated Assemblies', 'Riveting operations', 'Staking processes', 'Sub-assembly integration'],
    },
    {
      title: 'Additional Services',
      items: ['Coatings and surface treatments', 'Quality inspection', 'Packaging and logistics', 'Global shipping'],
    },
  ],
  design: [
    {
      title: 'CAD Software Suite',
      items: ['CATIA V5 R20', 'UniGraphics NX10', 'SolidWorks 2015', 'KeyCreator 13.5'],
    },
    {
      title: 'Simulation & Analysis',
      items: ['LS DynaForm 5.2', 'FTI - Fastform', 'Metal forming simulation', 'Material thinning analysis'],
    },
    {
      title: 'CAM & CNC',
      items: ['Mastercam X9', 'NX Design & CNC', 'Precision machining programs', 'Tool path optimization'],
    },
    {
      title: 'Development Services',
      items: ['Concept to production support', 'Prototype development', 'Design validation', 'Process optimization'],
    },
  ],
  capabilities: [
    {
      title: 'Material Expertise',
      items: ['HSLA (High Strength Low Alloy) steels', 'Dual Phase materials up to 1000MPa', 'Draw Quality steels', 'Non-ferrous materials'],
    },
    {
      title: 'Thickness Range',
      items: ['1mm – 8mm material thickness', 'Variable based on material type', 'Precision thickness control', 'Multi-gauge applications'],
    },
    {
      title: 'Process Capabilities',
      items: ['Deep draw forming', 'Progressive stamping', 'Transfer die operations', 'Complex geometry forming'],
    },
    {
      title: 'Quality Systems',
      items: ['IATF 16949 certified', 'CMM inspection', 'Hardness and tensile testing', 'Weld inspection capabilities'],
    },
  ],
  assembly: [
    {
      title: 'Seating Systems',
      items: ['Seat Frames and Structures', 'Seat Recliner Mechanisms', 'Seat Track Mechanisms', 'Seat Tumble Mechanisms'],
    },
    {
      title: 'Body in White (BIW)',
      items: ['Structural components', 'Pillar reinforcements', 'Frame rails', 'Cross-member assemblies'],
    },
    {
      title: 'Chassis Systems',
      items: ['Floor pan components', 'Structural brackets', 'Kick-up members', 'Support structures'],
    },
    {
      title: 'Additional Assemblies',
      items: ['Child Restraint Assemblies', 'Interior/Exterior Systems', 'Mechanism sub-assemblies', 'Custom weldments'],
    },
  ],
  innovation: [
    {
      title: 'Forming Simulations',
      items: ['Forming Limit Design', 'Springback prediction', 'Wrinkling analysis', 'Crack risk assessment'],
    },
    {
      title: 'Material Analysis',
      items: ['Material Thinning Analysis', 'Strain distribution', 'Thickness optimization', 'Material utilization'],
    },
    {
      title: 'Tool Design Process',
      items: ['Strip Layout optimization', 'Die Design simulation', 'Process validation', 'Virtual try-out'],
    },
    {
      title: 'Benefits',
      items: ['Reduced development time', 'Lower tooling costs', 'First-time quality', 'Optimized designs'],
    },
  ],
};
