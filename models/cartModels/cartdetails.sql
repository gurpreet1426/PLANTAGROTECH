-- Table: public.cartdetails

-- DROP TABLE IF EXISTS public.cartdetails;

CREATE TABLE IF NOT EXISTS public.cartdetails
(
    cartdetailid uuid NOT NULL,
	cartid uuid,
	pid uuid,
	pqty integer DEFAULT 0,
	authorid uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT cartdetails_pkey PRIMARY KEY (cartdetailid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cartdetails
    OWNER to postgres;