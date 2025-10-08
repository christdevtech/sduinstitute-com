import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type DepartmentsArgs = {
  featuredImage: Media
  metaImage: Media
}

export const departments: (
  args: DepartmentsArgs,
) => RequiredDataFromCollectionSlug<'departments'>[] = ({ featuredImage, metaImage }) => {
  return [
    {
      title: 'Department of Nursing',
      slug: 'nursing',
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
                  text: "The Department of Nursing at St. David's University Institute is dedicated to providing world-class education in nursing and healthcare. Our programs range from Assistant Nursing certificates to Bachelor's and Master's degrees, designed to meet international standards and prepare students for successful careers with 100% employment opportunities.",
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We offer comprehensive programs including Assistant Nursing, HND in Nursing Science, Bachelor of Science in Nursing, and Master of Science in Nursing, combining theoretical knowledge with practical hands-on experience in well-equipped facilities.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'nursing@sduinstitute.com',
        phone: '+237 233 42 63 81',
        office: 'Nursing Department Building, Floor 1',
      },
      meta: {
        title: "Department of Nursing - St. David's University Institute",
        description:
          "Leading department offering world-class nursing education with 100% employment opportunities at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Midwifery',
      slug: 'midwifery',
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
                  text: 'The Department of Midwifery provides specialized education in maternal and child health care. Our programs prepare students to become skilled midwives capable of providing comprehensive care during pregnancy, childbirth, and postpartum periods.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We offer programs from Assistant Midwifery to Master of Science in Midwifery, with special emphasis on biology and maternal health sciences.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'midwifery@sduinstitute.com',
        phone: '+237 233 42 63 82',
        office: 'Midwifery Department Building, Floor 1',
      },
      meta: {
        title: "Department of Midwifery - St. David's University Institute",
        description:
          'Specialized midwifery education program preparing students for careers in maternal and child health care.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Pharmacy',
      slug: 'pharmacy',
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
                  text: 'The Department of Pharmacy offers comprehensive education in pharmaceutical sciences, drug development, and pharmacy practice. Our programs prepare students for careers in community pharmacy, hospital pharmacy, pharmaceutical industry, and research.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We offer programs from Assistant Pharmacy to Master of Science in Pharmacy, with strong emphasis on science background and pharmaceutical knowledge.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'pharmacy@sduinstitute.com',
        phone: '+237 233 42 63 83',
        office: 'Pharmacy Department Building, Floor 1',
      },
      meta: {
        title: "Department of Pharmacy - St. David's University Institute",
        description:
          'Comprehensive pharmacy education program preparing students for careers in pharmaceutical sciences and practice.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Laboratory Technology',
      slug: 'laboratory-technology',
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
                  text: 'The Department of Laboratory Technology provides specialized education in medical laboratory sciences, diagnostic procedures, and laboratory management. Our programs prepare students to become skilled laboratory technologists in hospitals, clinics, and research facilities.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We offer programs from Assistant Laboratory Technology to Master of Science in Laboratory Technology, with strong emphasis on science background and laboratory techniques.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'laboratory@sduinstitute.com',
        phone: '+237 233 42 63 84',
        office: 'Laboratory Technology Building, Floor 1',
      },
      meta: {
        title: "Department of Laboratory Technology - St. David's University Institute",
        description:
          'Specialized laboratory technology education program preparing students for careers in medical laboratory sciences.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}
