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
      title: 'University of Buea',
      slug: 'university-of-buea',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.ubuea.cm',
        label: 'University of Buea'
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
                  text: 'The University of Buea is a leading public university in Cameroon, known for its excellence in higher education and research. As one of our key mentor universities, UB provides academic oversight and quality assurance for our degree programs.',
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
        title: 'University of Buea - Mentor University',
        description:
          'University of Buea serves as a mentor university for SDU Institute, providing academic oversight and quality assurance.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['bachelors'],
    },
    {
      title: 'University of Bamenda',
      slug: 'university-of-bamenda',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.uniba.cm',
        label: 'University of Bamenda'
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
                  text: "The University of Bamenda is a prestigious institution in Cameroon's Northwest Region. Our partnership with UNIBA ensures that our academic programs meet international standards and provide students with globally recognized qualifications.",
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
        title: 'University of Bamenda - Mentor University',
        description:
          'University of Bamenda partners with SDU Institute to ensure academic excellence and international recognition.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['bachelors']
    },
    {
      title: 'Catholic University of Cameroon',
      slug: 'catholic-university-cameroon',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.catuc.org',
        label: 'Catholic University of Cameroon'
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
                  text: 'The Catholic University of Cameroon (CATUC) is a private institution known for its commitment to academic excellence and moral values. Our collaboration with CATUC enhances the quality of education we provide to our students.',
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
        title: 'Catholic University of Cameroon - Mentor University',
        description:
          'Catholic University of Cameroon collaborates with SDU Institute to maintain high academic standards.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['bachelors']
    },
    {
      title: 'University of Dschang',
      slug: 'university-of-dschang',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.univ-dschang.org',
        label: 'University of Dschang'
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
                  text: "The University of Dschang is one of Cameroon's leading public universities, renowned for its research and academic programs. Our partnership ensures that our students receive education that meets the highest academic standards.",
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
        title: 'University of Dschang - Mentor University',
        description:
          'University of Dschang partners with SDU Institute to deliver world-class education and research opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['bachelors']
    },
    {
      title: 'University of Maroua',
      slug: 'university-of-maroua',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.univ-maroua.cm',
        label: 'University of Maroua'
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
                  text: 'The University of Maroua is a dynamic institution in Northern Cameroon, committed to providing quality higher education. Our collaboration with this university strengthens our academic offerings and research capabilities.',
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
      partnershipType: ['bachelors'],
      meta: {
        title: 'University of Maroua - Mentor University',
        description:
          'University of Maroua collaborates with SDU Institute to enhance academic quality and research excellence.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'University of Ngaoundéré',
      slug: 'university-of-ngaoundere',
      country: 'Cameroon',
      website: {
        type: 'custom',
        url: 'https://www.univ-ndere.cm',
        label: 'University of Ngaoundéré'
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
                  text: 'The University of Ngaoundéré is a respected public university in Cameroon, known for its diverse academic programs and research initiatives. Our partnership ensures that our students benefit from established academic traditions and modern educational approaches.',
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
        title: 'University of Ngaoundéré - Mentor University',
        description:
          'University of Ngaoundéré partners with SDU Institute to provide quality education and academic excellence.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
      partnershipType: ['bachelors'],
    },
  ]
}
