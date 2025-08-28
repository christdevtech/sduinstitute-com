import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type MentorUniversitiesArgs = {
  featuredImage: Media
  metaImage: Media
}

export const mentorUniversities: (
  args: MentorUniversitiesArgs,
) => RequiredDataFromCollectionSlug<'mentor-universities'>[] = ({ featuredImage, metaImage }) => {
  return [
    {
      title: 'University of BUEA',
      slug: 'university-of-buea',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.ubuea.cm',
        label: 'University of BUEA',
      },
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'The University of BUEA is a leading public university in Cameroon and one of our key local partner universities. UB provides academic supervision, curriculum validation, and certificate credibility for our HND, BTS, and degree programs, ensuring that our graduates receive internationally recognized qualifications.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      logo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'University of BUEA - Local Partner University',
        description:
          "University of BUEA serves as a local partner university for St. David's University Institute, providing academic supervision and certificate credibility.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['hnd', 'bts', 'degree'],
    },
    {
      title: 'University of BAMENDA',
      slug: 'university-of-bamenda',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.uniba.cm',
        label: 'University of BAMENDA',
      },
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: "The University of BAMENDA is a prestigious institution in Cameroon's Northwest Region and one of our trusted local partner universities. Our partnership with UNIBA ensures that our academic programs meet international standards and provide students with globally recognized qualifications in nursing and biomedical sciences.",
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      logo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'University of BAMENDA - Local Partner University',
        description:
          "University of BAMENDA partners with St. David's University Institute to ensure academic excellence and international recognition.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['hnd', 'bts', 'degree'],
    },
    {
      title: 'HIPDET University of BAMENDA',
      slug: 'hipdet-university-bamenda',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.hipdet.edu.cm',
        label: 'HIPDET University of BAMENDA',
      },
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'HIPDET University of BAMENDA is a specialized institution focused on health sciences and technology. As one of our local partner universities, HIPDET provides academic supervision and validation for our nursing and biomedical sciences programs, ensuring our students receive quality education aligned with industry standards.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      logo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'HIPDET University of BAMENDA - Local Partner University',
        description:
          "HIPDET University of BAMENDA collaborates with St. David's University Institute to maintain high academic standards in health sciences.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['hnd', 'bts', 'degree'],
    },
    {
      title: 'University of Dschang',
      slug: 'university-of-dschang',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.univ-dschang.org',
        label: 'University of Dschang',
      },
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: "The University of Dschang is one of Cameroon's leading public universities, renowned for its research and academic programs. As one of our local partner universities, UDs provides academic supervision and curriculum validation for our nursing and biomedical sciences programs, ensuring our graduates receive internationally recognized qualifications.",
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      logo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'University of Dschang - Local Partner University',
        description:
          "University of Dschang partners with St. David's University Institute to deliver world-class education and research opportunities.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['hnd', 'bts', 'degree'],
    },
    {
      title: 'HIAS University BUEA',
      slug: 'hias-university-buea',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.hias.edu.cm',
        label: 'HIAS University BUEA',
      },
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'HIAS University BUEA is a dynamic institution committed to providing quality higher education in health sciences. As one of our local partner universities, HIAS strengthens our academic offerings and research capabilities in nursing and biomedical sciences, ensuring our students receive comprehensive education.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      logo: featuredImage.id,
      _status: 'published',
      partnershipType: ['hnd', 'bts', 'degree'],
      meta: {
        title: 'HIAS University BUEA - Local Partner University',
        description:
          "HIAS University BUEA collaborates with St. David's University Institute to enhance academic quality and research excellence.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'European International University - PARIS',
      slug: 'european-international-university-paris',
      country: 'France',
      website: {
        type: 'custom',
        url: 'https://www.eiu-paris.com',
        label: 'European International University - PARIS',
      },
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'European International University - PARIS is our prestigious international partner university, providing global academic standards and international recognition to our programs. This partnership ensures that our students benefit from established European academic traditions and modern educational approaches, enhancing their career prospects internationally.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      logo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'European International University - PARIS - International Partner',
        description:
          "European International University - PARIS partners with St. David's University Institute to provide international academic standards and global recognition.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['degree', 'bts'],
    },
  ]
}
