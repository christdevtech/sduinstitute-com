# SDU Institute Website - University CMS Implementation Plan

## Project Overview

This project is a comprehensive Content Management System (CMS) built with Payload CMS and Next.js, specifically designed for SDU Institute - a Cameroon-based university. The system supports the unique academic structure and administrative needs of the institution.

## University Structure Analysis

### Academic Organization

- **Departments**: The university is organized by departments (not faculties)
- **Program Types**:
  - Basic Programs
  - Higher National Diploma (HND) - 3 years
  - Degree Programs (supervised by Mentor Universities):
    - Top-up programs (building on HND)
    - Direct entry programs
  - Master's Programs (supervised by Mentor Universities)
  - PhD Programs (supervised by Mentor Universities)

### Mentor University Partnership

- Master's and PhD programs are supervised by partner "Mentor Universities"
- Mentor university names appear on certificates
- Partnership management is crucial for academic credibility

## Current System Features

### Existing Collections

- **Pages**: Dynamic page builder with layout blocks
- **Posts**: Blog/news system with categories and rich content
- **Categories**: Content categorization system
- **Media**: File and image management
- **Users**: Admin user management

### Existing Blocks

- **Content**: Multi-column rich text layout (text-only, limited)
- **Media Block**: Image and media display
- **Banner**: Styled notification/alert blocks
- **Archive Block**: Collection display (posts, etc.)
- **Call to Action**: Interactive elements with link groups
- **Code**: Code snippet display
- **Form Block**: Contact and data collection forms

### Existing UI Components

- **Button**: Multiple variants (default, outline, ghost, link) with size options
- **Card**: Complete card system (header, content, footer, title, description)
- **Input/Textarea**: Form input components
- **Select/Checkbox**: Form selection components
- **Pagination**: Navigation for collections
- **CMSLink**: Enhanced link component with Material Design icons

### Recent Enhancements

- **Material Design Icons**: Added icon support to link fields with placement options (left/right)
- **Enhanced Navigation**: Icon-enabled navigation in header and footer

### Current Limitations

- **Content Block**: Only supports rich text, no media integration
- **Limited Interactive Elements**: No accordions, tabs, or modern UI patterns
- **Static Layouts**: Limited dynamic content presentation options
- **No Advanced Components**: Missing testimonials, statistics, feature grids, etc.

## Planned Implementation

### Phase 1: Core Collections (High Priority)

#### 1. Departments Collection

```typescript
// Fields:
- name: string (required)
- slug: string (auto-generated)
- description: rich text
- headOfDepartment: relationship to Staff
- contactInfo: group (email, phone, office)
- programs: relationship to Academic Programs
- staffMembers: relationship to Staff
- featuredImage: media
- meta: SEO fields
```

#### 2. Academic Programs Collection

```typescript
// Fields:
- title: string (required)
- slug: string (auto-generated)
- programType: select (Basic, HND, Degree-TopUp, Degree-Direct, Masters, PhD)
- department: relationship to Departments
- duration: string (e.g., "3 years", "2 years")
- entryRequirements: rich text
- curriculumOverview: rich text
- careerProspects: rich text
- mentorUniversity: relationship to Mentor Universities (conditional for Masters/PhD)
- tuitionFees: group (local, international)
- applicationDeadline: date
- intakePeriods: array of dates
- programCoordinator: relationship to Staff
- featuredImage: media
- brochure: media (PDF)
- meta: SEO fields
```

#### 3. Mentor Universities Collection

```typescript
// Fields:
- name: string (required)
- slug: string (auto-generated)
- country: string
- website: url
- logo: media
- partnershipStartDate: date
- partnershipType: select (Masters, PhD, Both)
- accreditationInfo: rich text
- contactPerson: group (name, email, phone)
- programsOffered: relationship to Academic Programs
- description: rich text
- meta: SEO fields
```

#### 4. Staff Collection (Separate from Users)

```typescript
// Fields:
- fullName: string (required)
- slug: string ('staff')
- employeeId: string (unique)
- position: string (e.g., "Professor", "Lecturer", "Assistant Lecturer")
- department: relationship to Departments
- hierarchyLevel: select (Vice-Chancellor, Deputy VC, Registrar, Dean, HOD, Senior Lecturer, Lecturer, Assistant Lecturer, Admin Staff)
- qualifications: array of text
- specializations: array of text
- bio: rich text
- contactInfo: group (email, phone, office)
- profileImage: media
- cv: media (PDF)
- researchInterests: array of text
- publications: rich text
- officeHours: rich text
- socialLinks: array of links
- isActive: boolean
- meta: SEO fields
```

#### 5. Events Collection

```typescript
// Fields:
- title: string (required)
- slug: string ('events')
- eventType: select (Academic, Administrative, Social, Conference, Workshop, Graduation, Orientation)
- description: rich text
- startDate: date (required)
- endDate: date
- startTime: string
- endTime: string
- location: string
- isAllDay: boolean
- department: relationship to Departments (optional)
- organizer: relationship to Staff (optional)
- targetAudience: select (Students, Staff, Public, Alumni, Prospective Students)
- registrationRequired: boolean
- registrationDeadline: date (conditional)
- maxAttendees: number (optional)
- eventImage: media
- attachments: array of media
- contactInfo: group (email, phone)
- isRecurring: boolean
- recurrencePattern: select (Daily, Weekly, Monthly, Yearly) (conditional)
- isFeatured: boolean
- meta: SEO fields
```

#### 6. School Calendar Collection

```typescript
// Fields:
- academicYear: string (required) (e.g., "2024-2025")
- semester: select (First Semester, Second Semester, Summer Session)
- calendarType: select (Academic, Administrative, Examination, Holiday)
- title: string (required)
- description: rich text
- startDate: date (required)
- endDate: date (required)
- isPublic: boolean
- affectedPrograms: relationship to Academic Programs (optional)
- departments: relationship to Departments (optional)
- priority: select (High, Medium, Low)
- color: string (hex color for calendar display)
- meta: SEO fields
```

### Phase 2: Specialized Blocks (Medium Priority)

#### 1. academicPrograms Block

- Display programs by department or type
- Filter and search functionality
- Card-based layout with key information
- Call-to-action for applications

#### 2. departmentOverview Block

- Department information display
- Staff listing
- Program offerings
- Contact information

#### 3. programPathway Block

- Visual representation of academic progression
- From Basic → HND → Degree → Masters → PhD
- Interactive pathway visualization

#### 4. mentorUniversities Block

- Partnership showcase
- University logos and information
- Programs offered through partnerships

#### 5. universityOrganigram Block

- Hierarchical staff structure visualization
- Interactive organizational chart
- Department-based grouping
- Contact information integration

#### 6. admissionsInfo Block

- Application deadlines
- Entry requirements by program
- Fee structure
- Application process steps

#### 7. eventsCalendar Block

- Display upcoming events
- Filter by event type and department
- Calendar view (month, week, day)
- Event registration integration
- Search and filter functionality

#### 8. academicCalendar Block

- Academic year overview
- Semester dates and deadlines
- Examination schedules
- Holiday periods
- Important academic milestones

## Modern UI Blocks & Components

### Enhanced Content Blocks

#### 1. enhancedContent Block

```typescript
// Enhanced version of current Content block
- columns: array with enhanced options
  - richText: rich text editor
  - media: relationship to Media (images, videos)
  - mediaPosition: select (top, bottom, left, right, background)
  - backgroundColor: color picker
  - textAlignment: select (left, center, right)
  - enableAnimation: checkbox
  - animationType: select (fadeIn, slideUp, slideLeft, etc.)
- containerStyle: select (default, fullWidth, contained)
- spacing: select (compact, normal, spacious)
```

#### 2. accordion Block

```typescript
// Collapsible content sections
- items: array
  - title: string
  - content: rich text
  - icon: Material Design icon (optional)
  - defaultOpen: checkbox
- allowMultiple: checkbox (multiple sections open)
- style: select (default, bordered, minimal)
- iconPosition: select (left, right)
```

#### 3. tabs Block

```typescript
// Tabbed content interface
- tabs: array
  - label: string
  - content: rich text
  - icon: Material Design icon (optional)
  - media: relationship to Media (optional)
- orientation: select (horizontal, vertical)
- style: select (default, pills, underline)
- defaultTab: number (index of default active tab)
```

#### 4. testimonials Block

```typescript
// Customer/student testimonials
- testimonials: array
  - quote: textarea
  - author: string
  - position: string
  - company: string (or department for students)
  - avatar: relationship to Media
  - rating: number (1-5 stars, optional)
- layout: select (carousel, grid, single)
- showRatings: checkbox
- autoplay: checkbox (for carousel)
```

#### 5. statistics Block

```typescript
// Numerical data display
- stats: array
  - number: string
  - label: string
  - description: textarea (optional)
  - icon: Material Design icon (optional)
  - color: color picker
- layout: select (horizontal, grid2x2, grid3x3)
- animateNumbers: checkbox
- backgroundColor: color picker
```

#### 6. featureGrid Block

```typescript
// Feature/service showcase
- features: array
  - title: string
  - description: textarea
  - icon: Material Design icon
  - link: link field (optional)
  - media: relationship to Media (optional)
- columns: select (2, 3, 4)
- style: select (cards, minimal, bordered)
- iconSize: select (small, medium, large)
```

#### 7. imageGallery Block

```typescript
// Image gallery with lightbox
- images: relationship to Media (hasMany)
- layout: select (grid, masonry, carousel)
- columns: select (2, 3, 4, 5)
- enableLightbox: checkbox
- showCaptions: checkbox
- aspectRatio: select (square, landscape, portrait, original)
```

#### 8. videoEmbed Block

```typescript
// Video embedding with multiple sources
- videoSource: select (youtube, vimeo, upload, url)
- videoId: string (for YouTube/Vimeo)
- videoFile: relationship to Media (for uploads)
- videoUrl: url (for external links)
- thumbnail: relationship to Media (custom thumbnail)
- autoplay: checkbox
- controls: checkbox
- aspectRatio: select (16:9, 4:3, 1:1)
- caption: textarea
```

#### 9. socialProof Block

```typescript
// Social media and trust indicators
- proofType: select (socialMedia, certifications, partnerships, awards)
- items: array
  - title: string
  - description: textarea (optional)
  - logo: relationship to Media
  - link: link field (optional)
- layout: select (horizontal, grid, carousel)
- showLogosOnly: checkbox
```

#### 10. pricingTable Block

```typescript
// Pricing plans (useful for course fees)
- plans: array
  - name: string
  - price: string
  - period: string (e.g., "per semester")
  - description: textarea
  - features: array of strings
  - highlighted: checkbox
  - ctaText: string
  - ctaLink: link field
- currency: string
- layout: select (cards, table)
- showComparison: checkbox
```

### Component Reusability Strategy

#### Leveraging Existing Components

**1. Button Component Integration**

- All CTA elements in new blocks will use existing `Button` component
- Consistent styling across `testimonials`, `featureGrid`, `pricingTable` blocks
- Support for all existing variants (default, outline, ghost, link)

**2. Card Component Usage**

- `featureGrid`, `testimonials`, `pricingTable` blocks built on existing `Card` system
- Consistent card layouts using `CardHeader`, `CardContent`, `CardFooter`
- Maintains design system coherence

**3. CMSLink Enhancement**

- All link fields in new blocks leverage existing link or linkGroup fields and `CMSLink` component
- Material Design icons already integrated
- Consistent link behavior across all blocks

**4. Media Component Integration**

- `enhancedContent`, `imageGallery`, `videoEmbed` blocks use existing `Media` component
- Consistent image/video handling and optimization
- Built-in responsive behavior

**5. Form Components**

- Contact forms in blocks use existing `Input`, `Textarea`, `Select` components
- Consistent form styling and validation

#### New UI Components Needed

**1. Accordion Component**

```typescript
// src/components/ui/accordion.tsx
- AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent
- Built with Radix UI primitives
- Integrates with existing design tokens
```

**2. Tabs Component**

```typescript
// src/components/ui/tabs.tsx
- TabsRoot, TabsList, TabsTrigger, TabsContent
- Horizontal and vertical orientations
- Icon support integration
```

**3. Badge Component**

```typescript
// src/components/ui/badge.tsx
- For statistics, pricing highlights, testimonial ratings
- Multiple variants (default, secondary, destructive, outline)
```

**4. Avatar Component**

```typescript
// src/components/ui/avatar.tsx
- For testimonials and staff profiles
- Fallback support for initials
- Image optimization integration
```

**5. Dialog/Modal Component**

```typescript
// src/components/ui/dialog.tsx
- For image gallery lightbox
- Video modal playback
- Contact form overlays
```

### Implementation Benefits

#### Design Consistency

- All new blocks follow existing design system
- Consistent spacing, typography, and color usage
- Unified component behavior across the site

#### Development Efficiency

- Reuse existing components reduces development time
- Consistent API patterns for easier maintenance
- Built-in accessibility features from existing components

#### Content Management

- Familiar interface patterns for content editors
- Consistent field types and validation
- Streamlined content creation workflow

#### Performance Optimization

- Shared component bundles reduce JavaScript payload
- Consistent image optimization across all media blocks
- Efficient re-rendering with shared component logic

### Phase 3: Enhanced Features (Low Priority)

#### Navigation Enhancements

- Academic Programs dropdown with department grouping
- Staff directory with search and filter
- Quick access to admissions information
- Mentor university partnerships showcase

#### Content Organization

- Comprehensive event management system
- Academic calendar with semester planning
- News and announcements categorization
- Student resources section
- Event registration and attendance tracking
- Calendar synchronization with external systems

## Technical Implementation Strategy

### Collection Relationships

```
Departments ←→ Staff (many-to-many)
Departments ←→ Academic Programs (one-to-many)
Departments ←→ Events (one-to-many, optional)
Academic Programs ←→ Mentor Universities (many-to-many, conditional)
Academic Programs ←→ School Calendar (many-to-many, optional)
Staff ←→ Academic Programs (program coordinators)
Staff ←→ Events (organizers, optional)
Events ←→ Departments (optional)
School Calendar ←→ Academic Programs (affected programs, optional)
School Calendar ←→ Departments (affected departments, optional)
```

### Block Integration

- All new blocks will integrate with existing RenderBlocks system
- Responsive design following current UI patterns
- Material Design icons for enhanced UX
- TypeScript support throughout

### Data Migration

- Seed data creation for initial content
- Import utilities for bulk staff and program data
- Validation and error handling

## Development Phases

### Phase 1: Foundation (Weeks 1-2)

**Collections & Core Infrastructure**

1. Create Departments collection
2. Create Academic Programs collection
3. Create Mentor Universities collection
4. Create Staff collection
5. Create Events collection
6. Create School Calendar collection
7. Set up relationships and validation

**New UI Components** 8. Create Accordion component (`src/components/ui/accordion.tsx`) 9. Create Tabs component (`src/components/ui/tabs.tsx`) 10. Create Badge component (`src/components/ui/badge.tsx`) 11. Create Avatar component (`src/components/ui/avatar.tsx`) 12. Create Dialog/Modal component (`src/components/ui/dialog.tsx`)

### Phase 2: Content Blocks (Weeks 3-5)

**Week 3: Academic-Specific Blocks**

1. academicPrograms Block
2. departmentOverview Block
3. universityOrganigram Block
4. mentorUniversities Block
5. eventsCalendar Block
6. academicCalendar Block

**Week 4: Essential Modern UI Blocks** 7. enhancedContent Block (enhanced version of current Content block) 8. accordion Block 9. tabs Block 10. testimonials Block 11. statistics Block 12. featureGrid Block

**Week 5: Advanced UI Blocks** 13. imageGallery Block 14. videoEmbed Block 15. socialProof Block 16. pricingTable Block

### Phase 3: Integration & Enhancement (Week 6)

**Content Management Improvements**

1. Update RenderBlocks component to include all new blocks
2. Create comprehensive seed data for all new blocks
3. Update TypeScript types and payload-types

**User Experience Enhancements** 4. Navigation updates with new content capabilities 5. Admin interface improvements for new blocks 6. Mobile responsiveness testing and optimization

**Quality Assurance** 7. Cross-browser testing for all new components 8. Accessibility audit and improvements 9. Performance optimization and bundle analysis 10. Documentation updates and usage examples

## Key Design Decisions

1. **Staff as Separate Collection**: Staff will be completely independent from Users collection to allow for public profiles and detailed academic information

2. **Conditional Mentor Universities**: Only Masters and PhD programs will have mentor university relationships

3. **Flexible Program Types**: Support for all program types with type-specific fields and validation

4. **Hierarchical Staff Structure**: Clear organizational hierarchy for organigram visualization

5. **Department-Centric Organization**: All academic content organized around departments

## Success Metrics

- Complete university structure representation
- Intuitive content management for administrators
- Public-facing staff directory and organigram
- Comprehensive program information display
- Partnership transparency through mentor university showcase
- Mobile-responsive design
- SEO optimization for all content types

## Next Steps

Once this documentation is approved, development will begin with Phase 1 collections, starting with the Departments collection as the foundation for the entire academic structure.

---

_This document serves as the comprehensive guide for implementing the SDU Institute website CMS. All stakeholders should review and approve before development begins._
