-- Table: public.productsizes

-- DROP TABLE IF EXISTS public.productsizes;

CREATE TABLE IF NOT EXISTS public.productsizes
(
    psizeid uuid NOT NULL,
	psizename character(255) COLLATE pg_catalog."default" NOT NULL,
	psizestatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
	authorid uuid,
	"createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT productsizes_pkey PRIMARY KEY (psizeid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.productsizes
    OWNER to postgres;