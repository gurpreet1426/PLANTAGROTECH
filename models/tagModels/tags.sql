-- Table: public.tags

-- DROP TABLE IF EXISTS public.tags;

CREATE TABLE IF NOT EXISTS public.tags
(
    tagid uuid NOT NULL,
	tagname character(255) COLLATE pg_catalog."default" NOT NULL, 
	tagstatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
	authorid uuid, 
	"createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT tags_pkey PRIMARY KEY (tagid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tags
    OWNER to postgres;