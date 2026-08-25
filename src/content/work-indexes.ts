const atlasBase = (import.meta.env.PUBLIC_ATLAS_URL ?? 'https://atlas.laline.house').replace(/\/$/, '');
const aureleBase = (import.meta.env.PUBLIC_AURELE_URL ?? 'https://aurele.laline.house').replace(/\/$/, '');
const allureBase = (import.meta.env.PUBLIC_ALLURE_URL ?? 'https://allure.laline.house').replace(/\/$/, '');

export interface WorkVolume {
  numeral: string;
  title: string;
  role: string;
  statement: string;
  description: string;
  detail: string;
  href: string;
}

export interface WorkIndexRecord {
  slug: 'atlas' | 'aurele' | 'allure';
  number: string;
  title: string;
  status: string;
  premise: string;
  description: string;
  editionUrl: string;
  volumes: WorkVolume[];
  note: {
    label: string;
    title: string;
    excerpt: string;
    href?: string;
    linkLabel?: string;
  };
}

export const workIndexes: Record<WorkIndexRecord['slug'], WorkIndexRecord> = {
  atlas: {
    slug: 'atlas',
    number: 'W01',
    title: 'Atlas',
    status: 'Version 1.0 · Live demonstration',
    premise: 'A photographer website system composed around three different relationships between work and viewer.',
    description: 'Atlas begins with the purpose of the visit. The same photographic practice can ask for contemplation, authored sequence or efficient professional evaluation.',
    editionUrl: atlasBase,
    volumes: [
      {
        numeral: 'I',
        title: 'Still',
        role: 'Singular attention',
        statement: 'One image. No competition.',
        description: 'A subtractive architecture that gives each photograph the full field and lets the viewer set the pace.',
        detail: 'Image by image · Viewer-paced',
        href: `${atlasBase}/still/`
      },
      {
        numeral: 'II',
        title: 'Sequence',
        role: 'Authored order',
        statement: 'Meaning develops through sequence.',
        description: 'A narrative architecture for bodies of work whose images and language depend on deliberate order.',
        detail: 'Project by project · Author-paced',
        href: `${atlasBase}/sequence/`
      },
      {
        numeral: 'III',
        title: 'Index',
        role: 'Professional range',
        statement: 'Breadth made easy to assess.',
        description: 'A functional architecture that makes categories, range, evidence and contact immediately legible.',
        detail: 'Category by category · Decision-paced',
        href: `${atlasBase}/index-volume/`
      }
    ],
    note: {
      label: 'Companion reading · W01',
      title: 'How Your Work Meets the Screen',
      excerpt: 'The context around a photograph begins shaping its meaning before the viewer has fully looked. Atlas treats that context as architecture rather than decoration.',
      href: `${atlasBase}/#reading`,
      linkLabel: 'Read within Atlas'
    }
  },
  aurele: {
    slug: 'aurele',
    number: 'W02',
    title: 'Aurèle',
    status: 'Version 1.0 · Complete demonstration',
    premise: 'An editorial publishing structure whose identity remains constant while the public record changes pace.',
    description: 'Aurèle separates the first account, the accumulating record and the later argument without making them feel like separate publications.',
    editionUrl: aureleBase,
    volumes: [
      {
        numeral: 'I',
        title: 'Dispatch',
        role: 'Immediate report',
        statement: 'What is known now.',
        description: 'A compressed structure that distinguishes established fact, report, context and unresolved questions.',
        detail: 'Immediate · Precise · Revisable',
        href: `${aureleBase}/dispatch/`
      },
      {
        numeral: 'II',
        title: 'Chronicle',
        role: 'Accumulated record',
        statement: 'What became known over time.',
        description: 'A sequential structure that preserves intervals, additions, false leads and visible correction.',
        detail: 'Sequential · Persistent · Accountable',
        href: `${aureleBase}/chronicle/`
      },
      {
        numeral: 'III',
        title: 'Review',
        role: 'Considered argument',
        statement: 'What the record has come to mean.',
        description: 'A spacious structure for interpretation that remains answerable to the evidence beneath it.',
        detail: 'Reflective · Measured · Resolved',
        href: `${aureleBase}/review/`
      }
    ],
    note: {
      label: 'Edition reading · W02',
      title: 'What Time Asks of the Page',
      excerpt: 'A public record does not hold still. Aurèle makes time part of the page architecture so immediacy, accumulation and interpretation remain distinct.',
      href: `${aureleBase}/#reading`,
      linkLabel: 'Read within Aurèle'
    }
  },
  allure: {
    slug: 'allure',
    number: 'W03',
    title: 'Allure',
    status: 'Working edition · Demonstration record',
    premise: 'A portfolio structure that presents one professional record through three resolved hierarchies.',
    description: 'Allure keeps the facts constant while changing what arrives first. Evidence, capability and consequence each produce a different professional reading.',
    editionUrl: allureBase,
    volumes: [
      {
        numeral: 'I',
        title: 'Retenue',
        role: 'The evidence',
        statement: 'Work organised by fact and proof.',
        description: 'A formal record for readers who need scope, dates, credentials and supporting evidence without interpretation getting in the way.',
        detail: 'Fact · Proof · Authority',
        href: `${allureBase}/retenue/`
      },
      {
        numeral: 'II',
        title: 'Éclat',
        role: 'The energy',
        statement: 'Work organised by capability and connection.',
        description: 'A capability-led portfolio that reveals relationships between disciplines, projects and the value created across them.',
        detail: 'Capability · Connection · Range',
        href: `${allureBase}/eclat/`
      },
      {
        numeral: 'III',
        title: 'Poise',
        role: 'The experience',
        statement: 'Work organised by time and consequence.',
        description: 'A career narrative that makes progression, accumulated practice and the consequences of the work visible.',
        detail: 'Time · Practice · Consequence',
        href: `${allureBase}/poise/`
      }
    ],
    note: {
      label: 'Working proposition · W03',
      title: 'The manner in which work enters a room',
      excerpt: 'A professional record is not received neutrally. Allure resolves its hierarchy around what the reader needs to recognise first, while the underlying facts remain unchanged.'
    }
  }
};
