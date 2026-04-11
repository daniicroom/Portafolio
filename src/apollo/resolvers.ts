import { Resolver, Query, Arg } from "type-graphql";
import { Me } from "./type-defs";
import { getResumeData, type Locale } from "../data";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(@Arg("locale", { nullable: true }) locale?: string): Me {
    const validLocale = (locale === "es" ? "es" : "en") as Locale;
    return getResumeData(validLocale) as any;
  }
}
