from pydantic import BaseModel # type: ignore

class DocumentStructure(BaseModel):
    content: str
    keywords: list[str]
    is_contain_image: bool