-- Table: public.products

-- DROP TABLE IF EXISTS public.products;

CREATE TABLE IF NOT EXISTS public.products
(
    pid uuid NOT NULL,
    name character(255) COLLATE pg_catalog."default" NOT NULL,
    slug character(255) COLLATE pg_catalog."default" NOT NULL,
    shortdescription text COLLATE pg_catalog."default" DEFAULT ''::text,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    price integer NOT NULL DEFAULT 0,
    discount integer DEFAULT 0,
    qty integer NOT NULL DEFAULT 0,
    organizationid uuid,
    categoryid uuid,
    authorid uuid,
    additionaldata json DEFAULT '{}'::json,
    status character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone NOT NULL DEFAULT now(),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT products_pkey PRIMARY KEY (pid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.products
    OWNER to postgres;