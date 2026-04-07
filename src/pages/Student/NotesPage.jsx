import React, { useState } from 'react';
import {
  mockInitialNotes,
  mockNoteCategoryOptions,
  mockNotePreviewByCategory,
  mockNotePriorityOptions,
} from '../../mockData/index';

const LEGAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(`
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#F2EDED" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">
      <g transform="translate(12 10)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(70 18)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
      <g transform="translate(126 12)">
        <path d="M6 34C6 18 12 10 22 10C32 10 38 18 38 34" />
        <path d="M10 38H34" />
      </g>
      <g transform="translate(176 12)">
        <path d="M6 10L26 18" />
        <path d="M16 6L30 11" />
        <path d="M10 25L20 10" />
        <path d="M5 28L15 13" />
      </g>

      <g transform="translate(18 74)">
        <path d="M2 10H28V24H2V10Z" />
        <path d="M2 24H28" />
      </g>
      <g transform="translate(76 68)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(130 74)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
      <g transform="translate(180 68)">
        <path d="M6 34C6 18 12 10 22 10C32 10 38 18 38 34" />
        <path d="M10 38H34" />
      </g>

      <g transform="translate(12 132)">
        <path d="M6 10L26 18" />
        <path d="M16 6L30 11" />
        <path d="M10 25L20 10" />
        <path d="M5 28L15 13" />
      </g>
      <g transform="translate(70 128)">
        <path d="M2 10H28V24H2V10Z" />
        <path d="M2 24H28" />
      </g>
      <g transform="translate(128 124)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(180 128)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
    </g>
  </svg>
`)})")`;

const createEmptyDraft = () => ({
  title: 'INTRODUCTION TO CRIMINAL LAW',
  category: 'Criminal Law',
  priority: 'Medium',
});

const formatShortDate = (date) =>
  date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).replace(', ', ',');

const formatFullDate = (date) =>
  date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).replace(' at ', ', ');

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 7L9 12L14 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16L20 20" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5V19" strokeLinecap="round" />
    <path d="M5 12H19" strokeLinecap="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 10L12 15L17 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4.5" y="6.5" width="15" height="13" rx="2" />
    <path d="M8 4.5V8" strokeLinecap="round" />
    <path d="M16 4.5V8" strokeLinecap="round" />
    <path d="M4.5 10H19.5" strokeLinecap="round" />
  </svg>
);

const InfoIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 10.5V15.5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 7L17 17" strokeLinecap="round" />
    <path d="M17 7L7 17" strokeLinecap="round" />
  </svg>
);

const TrashIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5.5 7H18.5" strokeLinecap="round" />
    <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7" strokeLinecap="round" />
    <path d="M8 7L8.8 18.2C8.87 19.18 9.69 19.95 10.67 19.95H13.33C14.31 19.95 15.13 19.18 15.2 18.2L16 7" strokeLinecap="round" />
    <path d="M10.5 10.5V16" strokeLinecap="round" />
    <path d="M13.5 10.5V16" strokeLinecap="round" />
  </svg>
);

const NoteIcon = () => (
  <svg className="h-[76px] w-[76px]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="21" y="18" width="30" height="44" rx="3.5" stroke="currentColor" strokeWidth="3.4" />
    <path d="M32 18V62" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    <path d="M39 31H45" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    <path d="M39 41H45" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
  </svg>
);

const groupNotesByLabel = (notes) => {
  const groups = [];

  notes.forEach((note) => {
    const existingGroup = groups.find((group) => group.label === note.groupLabel);

    if (existingGroup) {
      existingGroup.items.push(note);
      return;
    }

    groups.push({
      label: note.groupLabel,
      items: [note],
    });
  });

  return groups;
};

const SelectField = ({
  value,
  options,
  open,
  onToggle,
  onSelect,
  buttonClassName,
  menuClassName = '',
}) => (
  <div className="relative">
    <button
      type="button"
      onClick={onToggle}
      className={buttonClassName}
    >
      <span>{value}</span>
      <ChevronDownIcon />
    </button>

    {open ? (
      <div className={`absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl bg-white py-2 shadow-[0_20px_40px_rgba(17,24,39,0.12)] ${menuClassName}`}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className="flex w-full items-center px-4 py-2 text-left text-[13px] text-[#111827] transition hover:bg-[#f8f4f4]"
          >
            {option}
          </button>
        ))}
      </div>
    ) : null}
  </div>
);

const NoteCard = ({ note, onEdit, onOpenDetails }) => (
  <article className="rounded-[26px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6">
    <div className="flex items-start justify-between gap-4">
      <button
        type="button"
        onClick={onEdit}
        className="min-w-0 flex-1 text-left"
      >
        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">{note.title}</h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#f8f4f4] px-3 py-1 text-[11px] font-medium text-[#525866]">
            {note.category}
          </span>
          <span className="rounded-full bg-[#ffe48d] px-3 py-1 text-[11px] font-semibold text-[#815b00]">
            {note.priority} Priority
          </span>
        </div>

        <p className="mt-3 text-[13px] leading-[1.45] text-[#8b8a90]">{note.preview}</p>

        <div className="mt-3 flex items-center gap-1.5 text-[12px] text-[#8b8a90]">
          <CalendarIcon />
          <span>{note.createdShort}</span>
        </div>
      </button>

      <button
        type="button"
        onClick={onOpenDetails}
        className="mt-1 shrink-0 text-[#111827] transition hover:text-[#061526]"
        aria-label={`View details for ${note.title}`}
      >
        <InfoIcon />
      </button>
    </div>
  </article>
);

const ModalShell = ({ children, widthClassName = 'max-w-[760px]', onClose }) => (
  <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#111827]/25 px-4 py-6" onClick={onClose}>
    <div
      className={`w-full rounded-[18px] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.2)] ${widthClassName}`}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

const NoteFormModal = ({
  mode,
  draftNote,
  openMenu,
  onClose,
  onSave,
  onChange,
  onToggleMenu,
  onSelectOption,
}) => (
  <ModalShell widthClassName="max-w-[760px]" onClose={onClose}>
    <div className="px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">
          {mode === 'add' ? 'Add New Note' : 'Edit Note'}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="text-[#111827] transition hover:text-[#061526]"
          aria-label="Close note modal"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-[12px] uppercase tracking-[0.04em] text-[#4b5563]">Title</span>
          <input
            type="text"
            value={draftNote.title}
            onChange={(event) => onChange('title', event.target.value)}
            className="mt-3 h-12 w-full rounded-xl border border-[#f0eded] bg-[#fcf9f9] px-4 text-[14px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:border-[#061526]/25 focus:ring-2 focus:ring-[#061526]/10"
          />
        </label>

        <SelectField
          value={draftNote.category}
          options={mockNoteCategoryOptions}
          open={openMenu === 'note-category'}
          onToggle={() => onToggleMenu(openMenu === 'note-category' ? null : 'note-category')}
          onSelect={(value) => onSelectOption('category', value)}
          buttonClassName="flex h-12 w-full items-center justify-between rounded-xl border border-[#f0eded] bg-[#fcf9f9] px-4 text-[14px] text-[#111827] transition hover:border-[#d7d7db]"
        />

        <SelectField
          value={draftNote.priority}
          options={mockNotePriorityOptions}
          open={openMenu === 'note-priority'}
          onToggle={() => onToggleMenu(openMenu === 'note-priority' ? null : 'note-priority')}
          onSelect={(value) => onSelectOption('priority', value)}
          buttonClassName="flex h-12 w-full items-center justify-between rounded-xl border border-[#f0eded] bg-[#fcf9f9] px-4 text-[14px] text-[#111827] transition hover:border-[#d7d7db]"
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#9aa1ab] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSave}
          className="flex h-12 flex-1 items-center justify-center gap-3 rounded-xl bg-[#061526] text-[16px] font-semibold text-white transition hover:bg-[#0b1c32]"
        >
          <PlusIcon />
          create Note
        </button>
      </div>
    </div>
  </ModalShell>
);

const NoteDetailsModal = ({ note, onClose, onEdit, onDelete }) => (
  <ModalShell widthClassName="max-w-[520px]" onClose={onClose}>
    <div className="px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">Note Details</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-[#111827] transition hover:text-[#061526]"
          aria-label="Close note details"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-7 space-y-5 text-[#111827]">
        <div>
          <p className="text-[13px] text-[#6b7280]">Title</p>
          <p className="mt-1 text-[16px] font-medium">{note.title}</p>
        </div>
        <div>
          <p className="text-[13px] text-[#6b7280]">Category</p>
          <p className="mt-1 text-[16px] font-medium">{note.category}</p>
        </div>
        <div>
          <p className="text-[13px] text-[#6b7280]">Priority</p>
          <p className="mt-1 text-[16px] font-medium">{note.priority} Priority</p>
        </div>
        <div>
          <p className="text-[13px] text-[#6b7280]">Created on</p>
          <p className="mt-1 text-[16px] font-medium">{note.createdFull}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onEdit}
          className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#9aa1ab] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
        >
          Edit Note
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#ff2a1f] text-[16px] font-semibold text-white transition hover:bg-[#e52015]"
        >
          Delete Note
        </button>
      </div>
    </div>
  </ModalShell>
);

const DeleteModal = ({ noteTitle, onClose, onDelete }) => (
  <ModalShell widthClassName="max-w-[420px]" onClose={onClose}>
    <div className="px-5 py-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">Delete Note</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-[#111827] transition hover:text-[#061526]"
          aria-label="Close delete note dialog"
        >
          <CloseIcon />
        </button>
      </div>

      <p className="mt-4 text-[16px] leading-[1.35] text-[#111827]">
        This note <span className="font-semibold">"{noteTitle}"</span> will be removed permanently and you can no longer access it.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#9aa1ab] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#ff2a1f] text-[16px] font-semibold text-white transition hover:bg-[#e52015]"
        >
          <TrashIcon />
          Delete
        </button>
      </div>
    </div>
  </ModalShell>
);

export const NotesPage = ({ onBack }) => {
  const [notes, setNotes] = useState(mockInitialNotes);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('All priority');
  const [selectedCategory, setSelectedCategory] = useState('Criminal Law');
  const [openMenu, setOpenMenu] = useState(null);
  const [modalState, setModalState] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [draftNote, setDraftNote] = useState(createEmptyDraft());

  const selectedNote = notes.find((note) => note.id === selectedNoteId) ?? null;
  const filteredNotes = notes.filter((note) => {
    const matchesSearch = [note.title, note.category, note.preview]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    const matchesPriority = selectedPriority === 'All priority' || note.priority === selectedPriority;
    const matchesCategory = note.category === selectedCategory;

    return matchesSearch && matchesPriority && matchesCategory;
  });
  const groupedNotes = groupNotesByLabel(filteredNotes);

  const handleOpenAddModal = () => {
    setDraftNote(createEmptyDraft());
    setOpenMenu(null);
    setModalState('add');
  };

  const handleOpenEditModal = (note) => {
    setDraftNote({
      title: note.title,
      category: note.category,
      priority: note.priority,
    });
    setSelectedNoteId(note.id);
    setOpenMenu(null);
    setModalState('edit');
  };

  const handleOpenDetails = (note) => {
    setSelectedNoteId(note.id);
    setModalState('details');
  };

  const handleCloseModal = () => {
    setModalState(null);
    setOpenMenu(null);
  };

  const handleSaveNote = () => {
    const trimmedTitle = draftNote.title.trim();

    if (!trimmedTitle) {
      return;
    }

    if (modalState === 'add') {
      const now = new Date();
      const newNote = {
        id: `note-${now.getTime()}`,
        title: trimmedTitle,
        category: draftNote.category,
        priority: draftNote.priority,
        preview: mockNotePreviewByCategory[draftNote.category] ?? 'Study note saved for later review.',
        createdShort: formatShortDate(now),
        createdFull: formatFullDate(now),
        groupLabel: 'Today',
      };

      setNotes((current) => [newNote, ...current]);
      setSelectedCategory(draftNote.category);
      setModalState(null);
      return;
    }

    setNotes((current) =>
      current.map((note) =>
        note.id === selectedNoteId
          ? {
              ...note,
              title: trimmedTitle,
              category: draftNote.category,
              priority: draftNote.priority,
              preview: mockNotePreviewByCategory[draftNote.category] ?? note.preview,
            }
          : note,
      ),
    );
    setSelectedCategory(draftNote.category);
    setModalState(null);
  };

  const handleDeleteNote = () => {
    setNotes((current) => current.filter((note) => note.id !== selectedNoteId));
    setModalState(null);
    setSelectedNoteId(null);
  };

  return (
    <section
      className="relative min-h-[calc(100vh-130px)] overflow-hidden rounded-[28px] bg-[#fcf9f9] px-4 py-5 sm:px-6 sm:py-6"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      }}
    >
      <div className="relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d7db] bg-white text-[#111827] transition hover:bg-[#f8f4f4]"
            aria-label="Go back"
          >
            <ArrowLeftIcon />
          </button>

          <button
            type="button"
            onClick={handleOpenAddModal}
            className="inline-flex h-11 items-center justify-center gap-3 self-start rounded-xl bg-[#061526] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0b1c32] sm:self-auto"
          >
            <PlusIcon />
            Add New Note
          </button>
        </div>

        {notes.length > 0 ? (
          <>
            <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px_180px]">
              <label className="relative block">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search"
                  className="h-12 w-full rounded-xl bg-white px-12 pr-4 text-[14px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:ring-2 focus:ring-[#061526]/10"
                />
                <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#111827]">
                  <SearchIcon />
                </span>
              </label>

              <SelectField
                value={selectedPriority}
                options={['All priority', ...mockNotePriorityOptions]}
                open={openMenu === 'filter-priority'}
                onToggle={() => setOpenMenu(openMenu === 'filter-priority' ? null : 'filter-priority')}
                onSelect={(value) => {
                  setSelectedPriority(value);
                  setOpenMenu(null);
                }}
                buttonClassName="flex h-12 w-full items-center justify-between rounded-xl bg-white px-4 text-[14px] text-[#111827] transition hover:bg-[#faf7f7]"
              />

              <SelectField
                value={selectedCategory}
                options={mockNoteCategoryOptions}
                open={openMenu === 'filter-category'}
                onToggle={() => setOpenMenu(openMenu === 'filter-category' ? null : 'filter-category')}
                onSelect={(value) => {
                  setSelectedCategory(value);
                  setOpenMenu(null);
                }}
                buttonClassName="flex h-12 w-full items-center justify-between rounded-xl bg-white px-4 text-[14px] text-[#111827] transition hover:bg-[#faf7f7]"
              />
            </div>

            <div className="mt-6 space-y-6">
              {groupedNotes.length > 0 ? (
                groupedNotes.map((group) => (
                  <div key={group.label} className="space-y-3">
                    <h3 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">{group.label}</h3>
                    <div className="space-y-3">
                      {group.items.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          onEdit={() => handleOpenEditModal(note)}
                          onOpenDetails={() => handleOpenDetails(note)}
                        />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex min-h-[360px] items-center justify-center rounded-[26px] bg-white/70 px-6 text-center shadow-[0_10px_30px_rgba(17,24,39,0.03)]">
                  <div>
                    <div className="flex justify-center text-[#061526]">
                      <NoteIcon />
                    </div>
                    <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">No matching notes</h3>
                    <p className="mt-2 text-[14px] text-[#6b7280]">
                      Try adjusting your search, priority, or category filters.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex min-h-[calc(100vh-260px)] items-center justify-center px-6">
            <div className="text-center">
              <div className="flex justify-center text-[#061526]">
                <NoteIcon />
              </div>
              <h3 className="mt-4 text-[30px] font-semibold tracking-[-0.03em] text-[#111827]">No Notes Yet</h3>
              <p className="mt-2 max-w-[320px] text-[14px] leading-[1.4] text-[#6b7280]">
                You haven't created any notes. Start writing to save important ideas and key points for later.
              </p>
            </div>
          </div>
        )}
      </div>

      {modalState === 'add' || modalState === 'edit' ? (
        <NoteFormModal
          mode={modalState}
          draftNote={draftNote}
          openMenu={openMenu}
          onClose={handleCloseModal}
          onSave={handleSaveNote}
          onChange={(field, value) => setDraftNote((current) => ({ ...current, [field]: value }))}
          onToggleMenu={setOpenMenu}
          onSelectOption={(field, value) => {
            setDraftNote((current) => ({ ...current, [field]: value }));
            setOpenMenu(null);
          }}
        />
      ) : null}

      {modalState === 'details' && selectedNote ? (
        <NoteDetailsModal
          note={selectedNote}
          onClose={handleCloseModal}
          onEdit={() => handleOpenEditModal(selectedNote)}
          onDelete={() => setModalState('delete')}
        />
      ) : null}

      {modalState === 'delete' && selectedNote ? (
        <DeleteModal
          noteTitle={selectedNote.title}
          onClose={handleCloseModal}
          onDelete={handleDeleteNote}
        />
      ) : null}
    </section>
  );
};
