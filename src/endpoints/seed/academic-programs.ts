import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type AcademicProgramsArgs = {
  featuredImage: Media
  metaImage: Media
  nursingDepartment: any
  midwiferyDepartment: any
  pharmacyDepartment: any
  laboratoryTechnologyDepartment: any
}

export const academicPrograms: (
  args: AcademicProgramsArgs,
) => RequiredDataFromCollectionSlug<'academic-programs'>[] = ({
  featuredImage,
  metaImage,
  nursingDepartment,
  midwiferyDepartment,
  pharmacyDepartment,
  laboratoryTechnologyDepartment,
}) => {
  return [
    // BASIC PROGRAMS (Assistant Level)

    // Assistant Nursing
    {
      title: 'Assistant Nursing (1 Year)',
      slug: 'assistant-nursing-1-year',
      programType: 'Basic',
      department: nursingDepartment.id,
      duration: '1 year',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of first school leaving certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Nursing (1 Year) - St. David's University Institute",
        description:
          "One-year Assistant Nursing certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Assistant Nursing (2 Years)',
      slug: 'assistant-nursing-2-years',
      programType: 'Basic',
      department: nursingDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of ordinary level certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Nursing (2 Years) - St. David's University Institute",
        description:
          "Two-year Assistant Nursing certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Assistant Midwifery
    {
      title: 'Assistant Midwifery (1 Year)',
      slug: 'assistant-midwifery-1-year',
      programType: 'Basic',
      department: midwiferyDepartment.id,
      duration: '1 year',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of first school leaving certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Midwifery (1 Year) - St. David's University Institute",
        description:
          "One-year Assistant Midwifery certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Assistant Midwifery (2 Years)',
      slug: 'assistant-midwifery-2-years',
      programType: 'Basic',
      department: midwiferyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of ordinary level certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Midwifery (2 Years) - St. David's University Institute",
        description:
          "Two-year Assistant Midwifery certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Assistant Pharmacy
    {
      title: 'Assistant Pharmacy (1 Year)',
      slug: 'assistant-pharmacy-1-year',
      programType: 'Basic',
      department: pharmacyDepartment.id,
      duration: '1 year',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of first school leaving certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Pharmacy (1 Year) - St. David's University Institute",
        description:
          "One-year Assistant Pharmacy certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Assistant Pharmacy (2 Years)',
      slug: 'assistant-pharmacy-2-years',
      programType: 'Basic',
      department: pharmacyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of ordinary level certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Pharmacy (2 Years) - St. David's University Institute",
        description:
          "Two-year Assistant Pharmacy certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Assistant Laboratory Technology
    {
      title: 'Assistant Laboratory Technology (1 Year)',
      slug: 'assistant-laboratory-technology-1-year',
      programType: 'Basic',
      department: laboratoryTechnologyDepartment.id,
      duration: '1 year',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of first school leaving certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Laboratory Technology (1 Year) - St. David's University Institute",
        description:
          "One-year Assistant Laboratory Technology certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Assistant Laboratory Technology (2 Years)',
      slug: 'assistant-laboratory-technology-2-years',
      programType: 'Basic',
      department: laboratoryTechnologyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of ordinary level certificate or equivalent' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photographs' },
      ],
      tuitionFees: {
        local: '150,000 XAF per year',
        international: '150,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "Assistant Laboratory Technology (2 Years) - St. David's University Institute",
        description:
          "Two-year Assistant Laboratory Technology certificate program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // HND PROGRAMS

    // HND Nursing
    {
      title: 'HND in Nursing',
      slug: 'hnd-nursing',
      programType: 'HND',
      department: nursingDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of advanced level certificate or equivalent in any field' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '250,000 XAF per year',
        international: '250,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "HND in Nursing - St. David's University Institute",
        description:
          "Three-year Higher National Diploma in Nursing at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // HND Midwifery
    {
      title: 'HND in Midwifery',
      slug: 'hnd-midwifery',
      programType: 'HND',
      department: midwiferyDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        {
          requirement:
            'Photocopy of advanced level certificate or equivalent in any field plus biology',
        },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '250,000 XAF per year',
        international: '250,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "HND in Midwifery - St. David's University Institute",
        description:
          "Three-year Higher National Diploma in Midwifery at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // HND Pharmacy
    {
      title: 'HND in Pharmacy',
      slug: 'hnd-pharmacy',
      programType: 'HND',
      department: pharmacyDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        {
          requirement:
            'Photocopy of advanced level certificate or equivalent in any field, from a science background',
        },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '250,000 XAF per year',
        international: '250,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "HND in Pharmacy - St. David's University Institute",
        description:
          "Three-year Higher National Diploma in Pharmacy at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // HND Laboratory Technology
    {
      title: 'HND in Laboratory Technology',
      slug: 'hnd-laboratory-technology',
      programType: 'HND',
      department: laboratoryTechnologyDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        {
          requirement:
            'Photocopy of advanced level certificate or equivalent in any field, from a science background',
        },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '250,000 XAF per year',
        international: '250,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "HND in Laboratory Technology - St. David's University Institute",
        description:
          "Three-year Higher National Diploma in Laboratory Technology at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // TOP-UP DEGREE PROGRAMS

    // Top-up BSc Nursing
    {
      title: 'BSc Nursing (Top-up)',
      slug: 'bsc-nursing-top-up',
      programType: 'Degree-Direct',
      department: nursingDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of HND certificate or equivalent in nursing' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '300,000 XAF per year',
        international: '300,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Nursing (Top-up) - St. David's University Institute",
        description:
          "Two-year Bachelor of Science in Nursing top-up program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Top-up BSc Midwifery
    {
      title: 'BSc Midwifery (Top-up)',
      slug: 'bsc-midwifery-top-up',
      programType: 'Degree-TopUp',
      department: midwiferyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of HND certificate or equivalent in midwifery' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '300,000 XAF per year',
        international: '300,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Midwifery (Top-up) - St. David's University Institute",
        description:
          "Two-year Bachelor of Science in Midwifery top-up program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Top-up BSc Pharmacy
    {
      title: 'BSc Pharmacy (Top-up)',
      slug: 'bsc-pharmacy-top-up',
      programType: 'Degree-TopUp',
      department: pharmacyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of HND certificate or equivalent in pharmacy' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '300,000 XAF per year',
        international: '300,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Pharmacy (Top-up) - St. David's University Institute",
        description:
          "Two-year Bachelor of Science in Pharmacy top-up program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Top-up BSc Laboratory Technology
    {
      title: 'BSc Laboratory Technology (Top-up)',
      slug: 'bsc-laboratory-technology-top-up',
      programType: 'Degree-TopUp',
      department: laboratoryTechnologyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of HND certificate or equivalent in laboratory technology' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '300,000 XAF per year',
        international: '300,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Laboratory Technology (Top-up) - St. David's University Institute",
        description:
          "Two-year Bachelor of Science in Laboratory Technology top-up program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // DIRECT DEGREE PROGRAMS

    // Direct BSc Nursing
    {
      title: 'BSc Nursing (Direct Entry)',
      slug: 'bsc-nursing-direct',
      programType: 'Degree-Direct',
      department: nursingDepartment.id,
      duration: '4 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of advanced level certificate or equivalent in any field' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '350,000 XAF per year',
        international: '350,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Nursing (Direct Entry) - St. David's University Institute",
        description:
          "Four-year Bachelor of Science in Nursing direct entry program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Direct BSc Midwifery
    {
      title: 'BSc Midwifery (Direct Entry)',
      slug: 'bsc-midwifery-direct',
      programType: 'Degree-Direct',
      department: midwiferyDepartment.id,
      duration: '4 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        {
          requirement:
            'Photocopy of advanced level certificate or equivalent in any field plus biology',
        },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '350,000 XAF per year',
        international: '350,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Midwifery (Direct Entry) - St. David's University Institute",
        description:
          "Four-year Bachelor of Science in Midwifery direct entry program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Direct BSc Pharmacy
    {
      title: 'BSc Pharmacy (Direct Entry)',
      slug: 'bsc-pharmacy-direct',
      programType: 'Degree-Direct',
      department: pharmacyDepartment.id,
      duration: '4 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        {
          requirement:
            'Photocopy of advanced level certificate or equivalent in any field, from a science background',
        },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '350,000 XAF per year',
        international: '350,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Pharmacy (Direct Entry) - St. David's University Institute",
        description:
          "Four-year Bachelor of Science in Pharmacy direct entry program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // Direct BSc Laboratory Technology
    {
      title: 'BSc Laboratory Technology (Direct Entry)',
      slug: 'bsc-laboratory-technology-direct',
      programType: 'Degree-Direct',
      department: laboratoryTechnologyDepartment.id,
      duration: '4 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        {
          requirement:
            'Photocopy of advanced level certificate or equivalent in any field, from a science background',
        },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '350,000 XAF per year',
        international: '350,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "BSc Laboratory Technology (Direct Entry) - St. David's University Institute",
        description:
          "Four-year Bachelor of Science in Laboratory Technology direct entry program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // MASTERS PROGRAMS

    // MSc Nursing
    {
      title: 'MSc Nursing',
      slug: 'msc-nursing',
      programType: 'Masters',
      department: nursingDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of BSc certificate or equivalent in nursing' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '450,000 XAF per year',
        international: '450,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "MSc Nursing - St. David's University Institute",
        description:
          "Two-year Master of Science in Nursing program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // MSc Midwifery
    {
      title: 'MSc Midwifery',
      slug: 'msc-midwifery',
      programType: 'Masters',
      department: midwiferyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of BSc certificate or equivalent in midwifery' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '450,000 XAF per year',
        international: '450,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "MSc Midwifery - St. David's University Institute",
        description:
          "Two-year Master of Science in Midwifery program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // MSc Pharmacy
    {
      title: 'MSc Pharmacy',
      slug: 'msc-pharmacy',
      programType: 'Masters',
      department: pharmacyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of BSc or equivalent in pharmacy' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '450,000 XAF per year',
        international: '450,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "MSc Pharmacy - St. David's University Institute",
        description:
          "Two-year Master of Science in Pharmacy program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },

    // MSc Laboratory Technology
    {
      title: 'MSc Laboratory Technology',
      slug: 'msc-laboratory-technology',
      programType: 'Masters',
      department: laboratoryTechnologyDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: [
        { requirement: 'Photocopy of BSc certificate or equivalent in laboratory technology' },
        { requirement: 'Photocopy of birth certificate' },
        { requirement: 'Four passport size photos' },
      ],
      tuitionFees: {
        local: '450,000 XAF per year',
        international: '450,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: "MSc Laboratory Technology - St. David's University Institute",
        description:
          "Two-year Master of Science in Laboratory Technology program at St. David's University Institute.",
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}
