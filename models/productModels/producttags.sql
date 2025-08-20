-- Table: public.producttags

-- DROP TABLE IF EXISTS public.producttags;

CREATE TABLE IF NOT EXISTS public.producttags
(
    ptagid uuid NOT NULL,
	pid uuid,
	tagid uuid, 
	ptagstatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
	authorid uuid, 
	"createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT producttags_pkey PRIMARY KEY (ptagid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.producttags
    OWNER to postgres;